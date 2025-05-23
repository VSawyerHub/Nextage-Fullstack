

<div align="center">

  <img src="https://github.com/VSawyerHub/Nextage-Fullstack/blob/temp-branch/frontend/public/nextage.gif" width="850" height="260" />


<!-- Badges -->

<h4>
    <a href="https://github.com/Louis3797/awesome-readme-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# Table of Contents

- [About the Project](#about-the-project)
  * [Stack](#stack)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Run Locally](#run-locally)
  * [Code of Conduct](#code-of-conduct)
- [License](#license)


<!-- About the Project -->
## About the Project
<!-- TechStack -->
### Stack

<div align="center">
  <table>
    <tr>
      <td>
        <table>
          <thead>
            <tr>
              <th colspan="3" style="text-align:center">Front-End</th>
            </tr>
            <tr>
              <th>Badge</th>
              <th style="text-align:center">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=react"></a></td>
              <td style="text-align:right"><a href="https://reactjs.org/">React</a></td>
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=nextjs"></a></td>
              <td style="text-align:right"><a href="https://nextjs.org/">Next.js</a></td>
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=tailwind"></a></td>
              <td style="text-align:right"><a href="https://tailwindcss.com/">TailwindCSS</a></td>
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=styledcomponents"></a></td>
              <td style="text-align:right"><a href="https://styled-components.com/">Styled Components</a></td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th colspan="3" style="text-align:center">Back-End</th>
            </tr>
            <tr>
              <th>Badge</th>
              <th style="text-align:center">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=ts"></a></td>
              <td style="text-align:right"><a href="https://www.typescriptlang.org/">Prisma</a></td>
            </tr> 
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=nodejs"></a></td>
              <td style="text-align:right"><a href="https://nodejs.org/en/">Node.js</a></td>  
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=express"></a></td>
              <td style="text-align:right"><a href="https://expressjs.com/">Express.js</a></td>  
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=prisma"></a></td>
              <td style="text-align:right"><a href="https://www.prisma.io/">Prisma</a></td>
            </tr>
          </tbody>
        </table>
      </td>
       <td>       
        <table>
          <thead>
            <tr>
              <th colspan="3" style="text-align:center">DevOps</th>
            </tr>
            <tr>
              <th>Badge</th>
              <th style="text-align:center">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=postgres"></a></td>
              <td style="text-align:right"><a href="https://www.postgresql.org/">PostgreSQL</a></td>
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=git"></a></td>
              <td style="text-align:right"><a href="https://about.gitlab.com/">Gitlab</a></td>
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=docker"></a></td>
              <td style="text-align:right"><a href="https://www.docker.com/">Docker</a></td>
            </tr>
            <tr>
              <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=aws"></a></td>
              <td style="text-align:right"><a href="https://aws.amazon.com/?nc2=h_lg/">AWS</a></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</div>

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites

- IGDB account (Twitch Developer Portal)
- Client ID and Client Secret
[Click here to download Node.js](https://nodejs.org/pt/download)
- npm or yarn
- PostgreSQL
- Docker and Docker Compose (optional)

## Step 1: Register for IGDB API Access
1. Go to the [Twitch Developer Portal](https://dev.twitch.tv/console/apps)
2. Sign in with your Twitch account (or create one)
3. Click **Register Your Application**
4. Fill in the required fields:
  - **Name**: Your application name (e.g., "Nextage Gaming Platform")
  - **OAuth Redirect URLs**: Your application's callback URL (e.g., `http://localhost:3000/api/auth/callback/twitch`)
  - **Category**: Choose "Website Integration"

5. Click **Create**
6. Note your **Client ID** and generate a **Client Secret**

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

Set up the database

```bash
cd backend
npx prisma migrate dev
```

Start the server

```bash
  concurrently --kill-others "cd backend && npm start" "cd frontend && npm start"
```

## 📚 API Documentation
### Game API
The backend provides several endpoints to interact with game data:
- `GET /api/games/recentlyReleased` - Get new games
- `GET /api/games/upcoming` - Get upcoming games
- `GET /api/games/mostAnticipated` - Get highest hype games
- `GET /api/games/:slug` - Get detailed information about a specific game

### User API
Endpoints for user management:
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Authenticate a user
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile


<!-- Code of Conduct -->
### Code of Conduct

Please read the [Code of Conduct](https://github.com/Louis3797/awesome-readme-template/blob/master/CODE_OF_CONDUCT.md)


<!-- License -->
## License

Distributed under the no License. See LICENSE.txt for more information.
