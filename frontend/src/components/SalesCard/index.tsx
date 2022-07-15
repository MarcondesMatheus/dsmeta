import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    {/* <!-- inputs --> */}
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    {/* <!-- tabelas --> */}
                    <table className="dsmeta-sales-table">
                        {/* <!-- cabecalho da tabela --> */}
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="show992">#30</th>
                                <th className="show576">30/30/3030</th>
                                <th>Matue</th>
                                <th className="show992">30</th>
                                <th className="show992">30</th>
                                <th>R$ 30.000</th>
                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <th className="show992">#30</th>
                                <th className="show576">30/30/3030</th>
                                <th>Matue</th>
                                <th className="show992">30</th>
                                <th className="show992">30</th>
                                <th>R$ 30.000</th>
                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <th className="show992">#30</th>
                                <th className="show576">30/30/3030</th>
                                <th>Matue</th>
                                <th className="show992">30</th>
                                <th className="show992">30</th>
                                <th>R$ 30.000</th>
                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default SalesCard