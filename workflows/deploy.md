name: Netlify Deploy

on:
push:
branches: - main # 프로덕션 배포 - develop # 테스트 배포

jobs:
deploy:
runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to Netlify
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: '<Your Site ID>' # Netlify에서 제공된 Site ID
        run: |
          npm install -g netlify-cli
          if [ "${{ github.ref_name }}" = "main" ]; then
            netlify deploy --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID --prod --message "Production Deploy from main"
          elif [ "${{ github.ref_name }}" = "develop" ]; then
            netlify deploy --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID --branch=develop --message "Develop Deploy"
          fi