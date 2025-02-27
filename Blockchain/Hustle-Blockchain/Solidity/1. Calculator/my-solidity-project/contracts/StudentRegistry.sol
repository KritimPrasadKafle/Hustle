// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        uint id;
        string name;
    }

    Student[] public students;

    function addStudent(string memory _name) public {
        students.push(Student(students.length, _name));
    }

    function getStudent(uint _id) public view returns (string memory) {
        require(_id < students.length, "Student ID does not exist");
        return students[_id].name;
    }
    function getStudentCount() public view returns (uint) {
    return students.length;
}
}