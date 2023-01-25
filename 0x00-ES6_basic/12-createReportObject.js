export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesObj) {
      let size = 0;
      for (const i in employeesObj) {
        if (i) {
          console.log(i);
          size += 1;
        }
      }
      return size;
    },
  };
}
