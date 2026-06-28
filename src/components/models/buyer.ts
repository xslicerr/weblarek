import { TPayment } from "../../types"
import { IBuyer } from "../../types"

export class Buyer {
  payment: TPayment = ''
  address: string = ''
  email: string = ''
  phone: string = ''

  setPayment(payment: TPayment): void {
    this.payment = payment;
  }

  setAddress(address: string): void {
    this.address =  address;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  setEmail(email: string): void {
    this.email = email
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      email: this.email,
      phone: this.phone
    }
  }

  clear(): void  {
    this.payment = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }

  validate(): { payment?: string, email?: string, phone?: string, address?: string} {
    const errors: { payment?: string, email?: string, phone?: string, address?: string} = {}
    if (this.payment === '') {
      errors.payment = 'Не выбран способ оплаты';
    }

    if ( this.email === '') {
      errors.email = 'Укажите email';
    }

    if ( this.phone === '') {
      errors.phone = 'Не указан номер телефона';
    }

    if ( this.address === '') {
      errors.address = 'Не указан адрес';
    }

    return errors
  }
}