availableVacation(anEmployee, anEmployee.grade);

function availableVacation(anEmployee, grade) {
    if (grade == "A") {
        return 30;
    } else if (grade == "B") {
        return 20;
    } else if (grade == "C") {
        return 10;
    }
}

/////////////////////////////////////////

availableVacation(anEmployee);

function availableVacation(anEmployee) {
    const grade = anEmployee.grade;
    if (grade == "A") {
        return 30;
    } else if (grade == "B") {
        return 20;
    } else if (grade == "C") {
        return 10;
    }
}