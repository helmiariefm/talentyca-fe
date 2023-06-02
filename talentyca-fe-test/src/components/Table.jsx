import { useState } from 'react';
import '../styles/table.css';
import mahasiswa from '../mahasiswa.json';
import foto from '../assets/userIcon.png';

const Table = () => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [aspekPenilaian, setAspekPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const handleSimpan = (e) => {
    e.preventDefault();
    const nilaiMahasiswa = {
      aspek_penilaian_1: {},
      aspek_penilaian_2: {},
      aspek_penilaian_3: {},
      aspek_penilaian_4: {},
    };

    mahasiswa.forEach((mhs, i) => {
      const namaMahasiswa = mhs.nama;
      nilaiMahasiswa.aspek_penilaian_1[namaMahasiswa] = parseInt(
        e.target.elements[`aspek_penilaian_1_${i}`].value
      );
      nilaiMahasiswa.aspek_penilaian_2[namaMahasiswa] = parseInt(
        e.target.elements[`aspek_penilaian_2_${i}`].value
      );
      nilaiMahasiswa.aspek_penilaian_3[namaMahasiswa] = parseInt(
        e.target.elements[`aspek_penilaian_3_${i}`].value
      );
      nilaiMahasiswa.aspek_penilaian_4[namaMahasiswa] = parseInt(
        e.target.elements[`aspek_penilaian_4_${i}`].value
      );
    });

    setAspekPenilaian(nilaiMahasiswa);
  };

  return (
    <div style={{ width: '100%', marginBottom: '10%' }}>
        <form onSubmit={handleSimpan}>
        <div className="table-container">
            <table className="table">
            <thead>
                <tr>
                <th>Foto</th>
                <th>Mahasiswa</th>
                <th>Aspek Penilaian 1</th>
                <th>Aspek Penilaian 2</th>
                <th>Aspek Penilaian 3</th>
                <th>Aspek Penilaian 4</th>
                </tr>
            </thead>
            <tbody>
                {mahasiswa.map((mhs, index) => (
                <tr key={mhs.nama}>
                    <td>
                    <img className="profile-picture" src={foto} alt="Profile" />
                    </td>
                    <td>{mhs.nama}</td>
                    <td>
                    <select name={`aspek_penilaian_1_${index}`}>
                        {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    </td>
                    <td>
                    <select name={`aspek_penilaian_2_${index}`}>
                        {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    </td>
                    <td>
                    <select name={`aspek_penilaian_3_${index}`}>
                        {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    </td>
                    <td>
                    <select name={`aspek_penilaian_4_${index}`}>
                        {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <button type="submit" className="custom-button">
            Simpan
        </button>
        </form>      
        <pre style={{marginTop: '6rem', marginLeft: '14rem', marginRight: '14rem', display: 'flex', flexFlow: 'column'}}>
            <span style={{fontSize: "25px", fontWeight: 'bold', marginBottom: '11px'}}>OUTPUT</span>
            {JSON.stringify(aspekPenilaian, null, 2)}
        </pre>
    </div>
  );
};

export default Table;