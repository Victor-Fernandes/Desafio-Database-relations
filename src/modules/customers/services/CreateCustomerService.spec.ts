import AppError from '@shared/errors/AppError';
import CreateCustomerService from './CreateCustomerService';
import FakeCustomerRepository from '../repositories/fakes/FakeCustomerRepository';

let createCustomerService: CreateCustomerService;
let fakeCustomerService: FakeCustomerRepository;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomerService = new FakeCustomerRepository();

    createCustomerService = new CreateCustomerService(fakeCustomerService);
  });

  it('should be able to create a new customer', async () => {
    const customer = await createCustomerService.execute({
      name: 'testing',
      email: 'testing@gmail.com',
    });

    expect(customer).toHaveProperty('id');
  });
});
