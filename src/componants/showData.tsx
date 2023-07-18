
import { useEffect, useState } from "react";
import axios from 'axios';


type Product = {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
}


const ShowData = () => {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        axios.get('https://deafeningidealisticiteration.borntodev.repl.co/products')
            .then(response => {
                setProducts(response.data);
            })

            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    console.log("product==", products)
    products.map(res => {
        console.log("res ==>", res.title)
    })
    products.forEach(element => {
        console.log('element ==>', element.title)
    });

    return (
        <div className="App" style={{marginTop:50}}>
            {products.map((product: Product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.date}</p>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}


export default ShowData