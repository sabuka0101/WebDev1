from flask import Flask, render_template, request, redirect, session
import sqlite3, os, time
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = "supersecret"

ADMIN_PASSWORD = "admin123"
UPLOAD_FOLDER = "static/uploads"
DB = "database.db"

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# ---------- DATABASE ----------
def get_db():
    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    if not os.path.exists(DB):
        db = get_db()
        db.execute("""
        CREATE TABLE sections (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        )""")
        db.execute("""
        CREATE TABLE cards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            section_id INTEGER,
            name TEXT,
            image TEXT,
            description TEXT,
            FOREIGN KEY(section_id) REFERENCES sections(id)
        )""")
        db.execute("""
        CREATE TABLE messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT,
            answered INTEGER DEFAULT 0
        )""")
        db.commit()

# ---------- PAGES ----------
@app.route("/")
def home():
    db = get_db()
    sections = db.execute("SELECT * FROM sections").fetchall()
    cards = db.execute("SELECT * FROM cards").fetchall()
    return render_template("home.html", sections=sections, cards=cards)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact", methods=["GET","POST"])
def contact():
    success = False
    if request.method == "POST":
        db = get_db()
        db.execute(
            "INSERT INTO messages (name,email,message) VALUES (?,?,?)",
            (request.form["name"], request.form["email"], request.form["message"])
        )
        db.commit()
        success = True
    return render_template("contact.html", success=success)

# ---------- ADMIN LOGIN ----------
@app.route("/admin", methods=["GET","POST"])
def admin():
    if request.method == "POST":
        if request.form["password"] == ADMIN_PASSWORD:
            session["admin"] = True
            return redirect("/admin/dashboard")
    return render_template("admin_login.html")

# ---------- ADMIN DASHBOARD ----------
@app.route("/admin/dashboard", methods=["GET","POST"])
def dashboard():
    if not session.get("admin"):
        return redirect("/admin")
    db = get_db()

    # Add Card
    if request.method == "POST" and "card_name" in request.form:
        file = request.files.get("image")
        if file and file.filename != "":
            os.makedirs(UPLOAD_FOLDER, exist_ok=True)
            filename = f"{int(time.time())}_{secure_filename(file.filename)}"
            file.save(os.path.join(UPLOAD_FOLDER, filename))
        else:
            filename = None

        db.execute(
            "INSERT INTO cards (section_id, name, image, description) VALUES (?,?,?,?)",
            (request.form["section_id"], request.form["card_name"], filename, request.form["card_description"])
        )
        db.commit()

    # Add Section
    if request.method == "POST" and "section_name" in request.form:
        db.execute("INSERT INTO sections (name) VALUES (?)", (request.form["section_name"],))
        db.commit()

    sections = db.execute("SELECT * FROM sections").fetchall()
    cards = db.execute("SELECT * FROM cards").fetchall()
    return render_template("admin_dashboard.html", sections=sections, cards=cards)

# ---------- EDIT CARD ----------
@app.route("/admin/edit_card/<int:id>", methods=["GET","POST"])
def edit_card(id):
    if not session.get("admin"):
        return redirect("/admin")
    db = get_db()
    card = db.execute("SELECT * FROM cards WHERE id=?", (id,)).fetchone()
    sections = db.execute("SELECT * FROM sections").fetchall()

    if request.method == "POST":
        file = request.files.get("image")
        if file and file.filename != "":
            os.makedirs(UPLOAD_FOLDER, exist_ok=True)
            filename = f"{int(time.time())}_{secure_filename(file.filename)}"
            file.save(os.path.join(UPLOAD_FOLDER, filename))
        else:
            filename = card["image"]

        db.execute(
            "UPDATE cards SET section_id=?, name=?, image=?, description=? WHERE id=?",
            (request.form["section_id"], request.form["name"], filename, request.form["description"], id)
        )
        db.commit()
        return redirect("/admin/dashboard")

    return render_template("edit_card.html", card=card, sections=sections)

# ---------- DELETE CARD ----------
@app.route("/admin/delete_card/<int:id>")
def delete_card(id):
    if not session.get("admin"):
        return redirect("/admin")
    db = get_db()
    db.execute("DELETE FROM cards WHERE id=?", (id,))
    db.commit()
    return redirect("/admin/dashboard")

# ---------- EDIT SECTION ----------
@app.route("/admin/edit_section/<int:id>", methods=["GET","POST"])
def edit_section(id):
    if not session.get("admin"):
        return redirect("/admin")
    db = get_db()
    section = db.execute("SELECT * FROM sections WHERE id=?", (id,)).fetchone()
    if request.method == "POST":
        db.execute("UPDATE sections SET name=? WHERE id=?", (request.form["name"], id))
        db.commit()
        return redirect("/admin/dashboard")
    return render_template("edit_section.html", section=section)

# ---------- DELETE SECTION ----------
@app.route("/admin/delete_section/<int:id>")
def delete_section(id):
    if not session.get("admin"):
        return redirect("/admin")
    db = get_db()
    db.execute("DELETE FROM sections WHERE id=?", (id,))
    db.execute("DELETE FROM cards WHERE section_id=?", (id,))
    db.commit()
    return redirect("/admin/dashboard")

# ---------- MESSAGES ----------
@app.route("/admin/messages")
def admin_messages():
    if not session.get("admin"):
        return redirect("/admin")
    msgs = get_db().execute("SELECT * FROM messages ORDER BY id DESC").fetchall()
    return render_template("admin_messages.html", messages=msgs)

@app.route("/admin/messages/delete/<int:id>")
def delete_message(id):
    get_db().execute("DELETE FROM messages WHERE id=?", (id,))
    get_db().commit()
    return redirect("/admin/messages")

@app.route("/admin/messages/answer/<int:id>")
def answer_message(id):
    get_db().execute("UPDATE messages SET answered=1 WHERE id=?", (id,))
    get_db().commit()
    return redirect("/admin/messages")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

if __name__ == "__main__":
    init_db()

    app.run(host="0.0.0.0", port=5000, debug=True)