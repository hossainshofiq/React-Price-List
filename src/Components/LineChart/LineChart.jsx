import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const LineChart = () => {
    const studentData = [
        { name: "Alice", mathMarks: 82, physicsMarks: 75, chemistryMarks: 78 },
        { name: "Bob", mathMarks: 74, physicsMarks: 82, chemistryMarks: 69 },
        { name: "Charlie", mathMarks: 91, physicsMarks: 89, chemistryMarks: 85 },
        { name: "David", mathMarks: 68, physicsMarks: 72, chemistryMarks: 70 },
        { name: "Eve", mathMarks: 88, physicsMarks: 85, chemistryMarks: 84 },
        { name: "Frank", mathMarks: 79, physicsMarks: 81, chemistryMarks: 76 },
        { name: "Grace", mathMarks: 94, physicsMarks: 90, chemistryMarks: 92 },
        { name: "Hannah", mathMarks: 72, physicsMarks: 70, chemistryMarks: 68 },
        { name: "Ivan", mathMarks: 85, physicsMarks: 88, chemistryMarks: 80 },
        { name: "Judy", mathMarks: 90, physicsMarks: 87, chemistryMarks: 83 },
      ];
      
      

    return (
        <div>
            <LChart width={700} height={300} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='green'></Line>
                <Line dataKey="chemistryMarks" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;