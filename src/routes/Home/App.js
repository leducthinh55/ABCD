import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import bg from '../../assets/image/bg.png';
import Footer from '../../components/footer/Footer.component';
import productApi from '../../utils/productApi';
import { Img } from './Style';
import Menu from './components/Menu/index';
import CardContainer from './components/ProductCard';
import { db } from '../../firebase-config';
import { collection, getDocs } from "firebase/firestore";
//import { items } from './data';

import { Container } from '@mui/system';

const App = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const itemCollection = collection(db, "items");

    const filterItems = (category) => {
        if (category === 'all') {
            setItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setItems(newItems);
    };
    useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(itemCollection);            
            const itemsData = data.docs.map(d => ({ ...d.data(), id: d.id }));
            setItems(itemsData);
        }
        getItems();
    }, []);
    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#0f0f0f',
                width: '100%',
                flexDirection: 'column',
            }}
        >
            <Img src={bg}></Img>
            <Menu filterItems={filterItems}></Menu>
            <CardContainer items={items}></CardContainer>
            <Footer />
        </Container>
    );
};

export default App;
