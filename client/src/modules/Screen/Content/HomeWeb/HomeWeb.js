import {React, useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import ListNumbered from './ListNumbered/ListNumbered'
import axios from 'axios'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Bảng số liệu theo năm',
    },
  },
};

const labels = [''];



function HomeWeb() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:5000/api/book');
      setUsers(response.data);
      const a = response.data;
      console.log(a[0]);
    }
    fetchUsers();
  }, []);
  const total = users.reduce((acc, book) => acc + book.book_inventory, 0);

  const data = {
    labels,
    datasets: [
      {
        label: 'Số lượng sách',
        data: [users.length],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Số lượng hàng tồn',
        data: [total],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Số khách hàng đang nợ',
        data: [3],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div>
      <div >
        <div className="homeweb-list">
          <ListNumbered />
          
        </div>
      
      <div className="" style={{width: '1000px', marginLeft:'150px',marginTop:'60px'}}>
       <Bar options={options} data={data} />
      </div>
    </div>
    </div>
  );
}

export default HomeWeb
