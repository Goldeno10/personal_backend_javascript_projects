interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  workDirectorTasks(): string {
      return 'Getting to director tasks';
  }
  getCoffeeBreak(): string {
      return 'Geing cofee break';
  }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break'
    }
    workTeacherTasks() {
        return 'Getting to work'
    }
}

function  createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return   new Teacher();
  }
  else {
    return new Director();
  }
}