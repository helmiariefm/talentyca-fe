import '../styles/table.css';

const Table = () => {
  const options = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
        <div className='table-container'>
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
                    <tr>
                    <td><img className="profile-picture" src="profile.jpg" alt="Profile" /></td>
                    <td>John Doe</td>
                    <td>
                        <select>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    </td>
                    <td>
                        <select>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    </td>
                    <td>
                        <select>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    </td>
                    <td>
                        <select>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        <button className="custom-button">Submit</button>            
    </>
  );
};

export default Table;
