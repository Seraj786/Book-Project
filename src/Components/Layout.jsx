import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const Layout = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/products');
        const result = await response.json();
        setData(result)
    };

    return (
        <div>
            <ProductContext.Provider value={{ data, setData }}>
                {data.length === 0 ? <div>Loading...</div> :
                    <>
                        <Header />
                        <Outlet />
                    </>
                }
            </ProductContext.Provider>
            <Footer />
        </div>
    )
}
export default Layout