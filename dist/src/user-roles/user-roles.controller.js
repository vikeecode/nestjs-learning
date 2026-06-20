"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../guards/roles/roles.decorator");
const roles_enums_1 = require("../guards/roles/roles.enums");
const roles_guard_1 = require("../guards/roles/roles.guard");
let UserRolesController = class UserRolesController {
    getAdminData() {
        return { message: 'OnlyAdmin Can acess this!' };
    }
    getUserData() {
        return { message: 'OnlyUser Can acess this!' };
    }
};
exports.UserRolesController = UserRolesController;
__decorate([
    (0, common_1.Get)('admin-data'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enums_1.Role.Admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRolesController.prototype, "getAdminData", null);
__decorate([
    (0, common_1.Get)('user-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRolesController.prototype, "getUserData", null);
exports.UserRolesController = UserRolesController = __decorate([
    (0, common_1.Controller)('user-roles')
], UserRolesController);
//# sourceMappingURL=user-roles.controller.js.map