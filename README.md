# safariapp

git clone https://github.com/dork1/safariapp.git
cd projectName

### Git Flow
Never commit to the master directly.
Always do your work on a different branch from master.
1. git pull origin master
2. git checkout -b MyNewBranch
3. git add .
4. git commit -m "description of your commit"
5. git push origin MyNewBranch (push including your branch)

#### to run nodemon and browser-sync at the same time
1. Start new terminal and run: npm run dev
2. open another new terminal and run: npm run ui
// If you get connect EADDRINUSE 127.0.0.1:3000 error, restart your browser and relaunch both terminals and commands. Dev script must run first.

#### ENV vars:  heroku-config.py - thanks to https://github.com/sdkcodes/heroku-config
- use heroku-config.py to push local env changes to heroku remote via cli
- befrore running set NODE_ENV=STAGING or =PRODUCTION  
- change xxxxx refs to staging/production heroku hostnames


