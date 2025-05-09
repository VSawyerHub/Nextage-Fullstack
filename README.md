

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
- [Getting Started Locally](#getting-started-locally)
  * [Prerequisites](#prerequisites)
  * [Run Locally](#run-locally)
- [License](#license)
  

# 🎮 Nextage-Fullstack

## 📖 Description

**Nextage-Fullstack** is a fullstack web application built to help gamers manage their video game collection and progress. With a clean interface and powerful features, users can:

- **Game Catalog**: Organize and track all your owned and desired games.
- **Backlog Management**: Maintain a to-play list to never forget what’s next.
- **User Authentication**: Sign up and log in securely.
- **Cross-Platform Game Tracking**: Sync and follow game data across different video game platforms.

---

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


<!-- Getting Started Locally -->
## 🚀 Getting Started Locally

<!-- Prerequisites -->
### Prerequisites

Make sure you have the following tools installed:

- [Click here to download Node.js](https://nodejs.org/pt/download) (v18 or higher recommended) 
- **npm** or **yarn**
- **Docker** (optional, for database containerization)

### Installation Steps

1. **Clone the repository:**

```bash
git clone https://github.com/VSawyerHub/Nextage-Fullstack.git
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

<!-- Docker Setup -->
## 📦 Docker Setup (Optional)

If you prefer using Docker for local development, especially for the database:

Start containers with Docker Compose:

```bash
docker-compose up -d
```

Apply Prisma migrations:

```bash
npx prisma migrate dev
```

Generate Prisma client:

```bash
npx prisma generate
```

<!-- License -->
## License

Distributed under the no License. See LICENSE.txt for more information.

