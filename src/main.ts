import './scss/styles.scss';
import { Catalog } from './components/models/catalog';
import { apiProducts } from './utils/data';
import { Api } from './components/base/Api';
import { AppApi } from './components/models/appApi';
import { Cart } from './components/models/cart';
import { Buyer } from './components/models/buyer';
import { API_URL } from './utils/constants';

const productsModel = new Catalog();
productsModel.setItems(apiProducts.items);
console.log('Локальный каталог:', productsModel.getItems());


const cart = new Cart();
cart.addItem(apiProducts.items[0]);
cart.addItem(apiProducts.items[1]);
console.log('Корзина (товары):', cart.getItems());
console.log('Корзина (сумма):', cart.getTotal());
console.log('Корзина (количество):', cart.getCount());
console.log('Есть товар с id 1?', cart.contains(apiProducts.items[0].id));
cart.removeItem(apiProducts.items[0].id);
console.log('Корзина после удаления:', cart.getItems());
cart.clear();
console.log('Корзина после очистки:', cart.getItems());


const buyer = new Buyer();
console.log('Валидация (пустые поля):', buyer.validate());
buyer.setEmail('test@mail.ru');
buyer.setPhone('+79991234567');
buyer.setAddress('ул. Пушкина, 1');
buyer.setPayment('card');
console.log('Данные покупателя:', buyer.getData());
console.log('Валидация (после заполнения):', buyer.validate());
buyer.clear();
console.log('После очистки:', buyer.getData());


const api = new Api(API_URL);
const appApi = new AppApi(api);

appApi.getProducts()
    .then(data => {
        productsModel.setItems(data.items);
        console.log('Каталог с сервера:', productsModel.getItems());
    })
    .catch(err => console.error('Ошибка загрузки:', err));