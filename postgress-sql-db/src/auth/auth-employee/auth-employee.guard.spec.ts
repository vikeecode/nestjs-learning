import { AuthEmployeeGuard } from './auth-employee.guard';

describe('AuthEmployeeGuard', () => {
  it('should be defined', () => {
    expect(new AuthEmployeeGuard()).toBeDefined();
  });
});
