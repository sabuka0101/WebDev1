const company = {
    frontend: {
        John: 1200,
        Mary: 1500
    },
    backend: {
        Peter: 1800,
        Anna: 2000
    },
    design: {
        Lucy: 1300
    }
};

function analyzeCompany() {
    let salary = 0;

    for (department in company) {
        for (employee in company[department]) {
            salary += company[department][employee];
        }
    }
}
analyzeCompany();
