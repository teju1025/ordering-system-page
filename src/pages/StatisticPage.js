import React, {useState, useEffect, Fragment} from 'react'

export default function StatisticPage() {
        
    const [orders, setOrders] = useState([])
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [menu, setMenu] = useState([])
    const [statistic, setStatistic] = useState({})
    // {餐點名稱: "測試", 銷售量: 10, 銷售金額: 10}
        
    useEffect(() => {
        let query = ''
        if(startDate !== '') {
            query += `dateBegin=${startDate}`
        }
        if(endDate !== '') {
            if (query !== '') {
                query += '&'
            }
            query += `dateEnd=${endDate}`
        }

        fetch(`https://ordering-system-api.herokuapp.com/statistic?${query}`).then(res => {
            if(res.ok) {
                return res.json() 
            }
            return {}
        }).then(data => {
            setStatistic(data)
        })
    }, [startDate, endDate])
    
    return (
        <div className="card">
            <h2>銷貨統計</h2>
            <div>
                <div>
                    <label htmlFor="start">Start date:</label>
                    <input type="date" id="start" name="time-start" onChange={e => setStartDate(e.target.value.replaceAll('-', ''))}/>
                </div>
                <div>
                    <label htmlFor="end">End date:</label>
                    <input type="date" id="end" name="time-end" onChange={e => setEndDate(e.target.value.replaceAll('-', ''))}/>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>餐點名稱</th>
                        <th>銷售量</th>
                        <th>銷售收入</th>
                        <th>銷售成本</th>
                        <th>銷售毛額</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(statistic).map(key => {
                            return (
                                <tr>
                                    <td>{key}</td>
                                    <td>{statistic[key].銷售量} 份</td>
                                    <td>$ {statistic[key].銷售收入}</td>
                                    <td>$ {statistic[key].銷售成本}</td>
                                    <td>$ {statistic[key].銷售收入 - statistic[key].銷售成本}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>  
        </div>
    )
}