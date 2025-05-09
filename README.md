

<div align="center">

  <img src="https://github.com/VSawyerHub/Nextage-Fullstack/blob/main/frontend/public/nextage.gif" width="850" height="260" />

  
<!-- Badges -->
   
<h4>
    <a href="https://github.com/VSawyerHub/Nextage-Fullstack/">Documentation</a>
  <span> · </span>
    <a href="https://github.com/VSawyerHub/Nextage-Fullstack/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/VSawyerHub/Nextage-Fullstack/issues">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# Table of Contents

- [About the Project](#about-the-project)
  * [Stack](#stack)
  * [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Run Locally](#run-locally)
- [License](#license)
  

<!-- About the Project -->
## About the Project
<!-- TechStack -->
### Stack

<div>
  <table>
    <tr>
      <td>
        <table>
          <thead>
            <tr>
              <th colspan="3" style="text-align:center">FRONT-END</th>
            </tr>
            <tr>
              <th>Badge</th>
              <th style="text-align:center">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content</td>
              <td style="text-align:right"><a href="https://reactjs.org/">React</a></td>
            </tr>
            <tr>
              <td>Content</td>
              <td style="text-align:right"><a href="https://nextjs.org/">Next.js</a></td>
            </tr>
            <tr>
              <td>Content</td>
              <td style="text-align:right"><a href="https://tailwindcss.com/">TailwindCSS</a></td>
            </tr>
            <tr>
              <td>Content</td>
              <td style="text-align:right"><a href="https://styled-components.com">Styled Components</a></td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th colspan="3" style="text-align:center">BACK-END</th>
            </tr>
            <tr>
              <th>Badge</th>
              <th style="text-align:center">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content</td>
              <td style="text-align:right"><a href="https://expressjs.com/">Express.js</a></td>  
            </tr>
            <tr>
              <td>Content</td>
              <td style="text-align:right"><a href="https://www.postgresql.org/">PostgreSQL</a></td>
            </tr>  
            <tr>
              <td>Content</td>
              <td style="text-align:right"><a href="https://www.prisma.io/">Prisma</a></td>
            </tr>          
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</div>

              
<!-- Env Variables -->
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites
[Click here to download Node.js](https://nodejs.org/pt/download)

<!-- Run Locally -->
### Run Locally

Clone the project

```bash
  git clone https://github.com/VSawyerHub/Nextage-Fullstack.git
```

Go to the project directory

```bash
  cd Nextage-Fullstack
```

Install dependencies

```bash
  npm run install:backend && npm run install:frontend
```

Start the server

```bash
  concurrently --kill-others "cd backend && npm start" "cd frontend && npm start"
```


<!-- License -->
## License

Distributed under the no License. See LICENSE.txt for more information.

