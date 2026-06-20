"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./user/user.controller");
const product_service_1 = require("./product/product.service");
const product_controller_1 = require("./product/product.controller");
const emoplyee_module_1 = require("./emoplyee/emoplyee.module");
const student_module_1 = require("./student/student.module");
const customer_module_1 = require("./customer/customer.module");
const myname_controller_1 = require("./myname/myname.controller");
const user_roles_controller_1 = require("./user-roles/user-roles.controller");
const exception_controller_1 = require("./exception/exception.controller");
const logger_middleware_1 = require("./middleware/logger/logger.middleware");
const database_service_1 = require("./database/database.service");
const database_controller_1 = require("./database/database.controller");
const config_1 = require("@nestjs/config");
const ev_service_1 = require("./ev/ev.service");
const ev_controller_1 = require("./ev/ev.controller");
let AppModule = class AppModule {
    configure(customer) {
        customer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [emoplyee_module_1.EmoplyeeModule, student_module_1.StudentModule, customer_module_1.CustomerModule, config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            })],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, product_controller_1.ProductController, myname_controller_1.MynameController, user_roles_controller_1.UserRolesController, exception_controller_1.ExceptionController, database_controller_1.DatabaseController, ev_controller_1.EvController],
        providers: [app_service_1.AppService, product_service_1.ProductService, database_service_1.DatabaseService, ev_service_1.EvService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map