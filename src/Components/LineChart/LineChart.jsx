import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 2, name: "Bob", math: 85 },
        { id: 1, name: "Alice", math: 78 },
        { id: 3, name: "Charlie", math: 92 },
        { id: 4, name: "David", math: 67 },
        { id: 5, name: "Eve", math: 74 },
        { id: 6, name: "Frank", math: 88 },
        { id: 7, name: "Grace", math: 95 },
        { id: 8, name: "Hannah", math: 82 },
        { id: 9, name: "Ivy", math: 90 },
        { id: 10, name: "Jack", math: 76 }
    ]

    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line dataKey="math"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;