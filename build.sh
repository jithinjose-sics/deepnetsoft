# Create a fresh build.sh
echo '#!/bin/bash
cd menumanagement
npm install
npm run build' > build.sh
chmod +x build.sh

# Update vercel.json
echo '{
  "version": 2,
  "builds": [
    {
      "src": "build.sh",
      "use": "@vercel/static-build"
    },
    {
      "src": "menumanagementbackend/index.js",
      "use": "@vercel/node"
    }
  ]
}' > vercel.json