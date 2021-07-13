module.exports = {
  outputDir: '../src/main/resources/static', //npm run build 빌드 시 파일이 생성되는 위치
  devServer: {
    port: 3000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080' // Spring Boot의 내장 was 주소
      }
    }
  }
}
