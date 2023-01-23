export default function createIteratorObject(report) {
    let arr = [];
    for (const obj in report.allEmployees){
        arr = [...arr, ...report.allEmployees[obj]];
    }
    return arr
}