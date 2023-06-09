import React from 'react';

const MyClasses = ({ classes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Status</th>
          <th>Total Enrolled Students</th>
          <th>Feedback</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((classItem) => (
          <tr key={classItem.id}>
            <td>{classItem.name}</td>
            <td>{classItem.status}</td>
            <td>{classItem.totalStudents}</td>
            <td>
              {classItem.feedback ? (
                <button onClick={() => viewFeedback(classItem.id)}>
                  View Feedback
                </button>
              ) : (
                'No feedback yet'
              )}
            </td>
            <td>
              <button onClick={() => updateClass(classItem.id)}>
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyClasses;
