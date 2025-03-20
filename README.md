# Angular CRUD By [Sotobotero](https://sotobotero.com)
[![Powered by @sotobotero](https://img.shields.io/badge/Powered%20by-%40sotobotero-blue?style=flat-square&logo=twitter)](https://twitter.com/sotobotero)
[![Sotobotero.com](https://img.shields.io/badge/Powered%20by-sotobotero.com-blue?style=flat-square&logo=twitter)](https://sotobotero.com/)

🌟 **Contribuye y Mejora este Proyecto**
¡Este proyecto está en constante evolución y cualquier mejora es bienvenida! 🎉 Si encuentras algo que se pueda optimizar, tienes una idea o quieres corregir errores, no dudes en participar.
### 📌¿Quieres enviar cambios y no sabes cómo?📌
Consulta el paso a paso [**Cómo contribuir con un proyecto en github**](https://github.com/sotobotero/CodeHub/blob/develop/README.md#-cómo-contribuir) para español or [**How to Contribute with github project**](https://github.com/sotobotero/CodeHub/blob/develop/README.md#-how-to-contribute) for English.
## License
This project is open source under the [Licencia MIT](https://github.com/sotobotero/CodeHub/blob/develop/LICENSE).

## Getting Started

## Requirements
1. Install Node.js LTS (v18.16.0) or later and Angular CLI (v13) or later.
2. Optional: Clone and start the backend of the [customer-back](https://github.com / sotobotero / customer-back) application, if you don't have the backend, the application will only load the front but will have no connection to a backend.


## Installation
1. Clone the repository
2. Enter the project folder
3. Install npm packages with the command npm install.
4. Run the command ng serve --configuration=production for a development server. Navigate to http://localhost:4200/customers.
The application will reload automatically if any of the source files are changed.


## Angular 2+ - Environment Variables
Due to this app are execute on web browser, you can't use environment variables on environments/environment.ts, becuase this file are execute on server side, and enviroment variables are not available on server side.

If you want to use environment variables on environments/environment.prod.ts, you need to change the aporach for use dotenv lib and  dotenv-webpack plugin for webpack. 