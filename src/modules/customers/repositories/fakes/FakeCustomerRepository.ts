import { uuid } from 'uuidv4';
import ICustomersRepository from '../ICustomersRepository';
import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';
import Customer from '../../infra/typeorm/entities/Customer';

class FakeCustomersRepository implements ICustomersRepository {
  private customers: Customer[] = [];

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer();

    Object.assign(customer, { id: uuid() }, data);

    this.customers.push(customer);

    return customer;
  }
}

export default FakeCustomersRepository;
