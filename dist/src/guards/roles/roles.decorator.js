"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.Roles_Key = void 0;
const common_1 = require("@nestjs/common");
exports.Roles_Key = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.Roles_Key, roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map