---
index: 11
icon: creative
title: 7계층 프로토콜 HTTP
category:
  - Network
tag:
  - 네트워크
editLink: false
---

:::tip GOAL
Q. HTTP 프로토콜이 하는 일과 특징  
Q. http 1.1의 특징  
:::
해당페이지는 2022년 3월 노션에서 마이그레이션 되었습니다.  
## 7계층 프로토콜
7계층프로토콜은 엄청 많다. 개인이 만들 수 도 있다. 소켓통식 프로그램이 7계층 프로그램을 만드는 거다.
보통 소켓통식은 채팅프로그램을 하기 위한 프로그램으로 알고있는데, 그렇다기 보다는 데이터 보내는 형식을 만들면 그 형식이 프로토콜이 되는거다. 프로그램 만드는 사람 마음이다.

## HTTP프로토콜
웹을 만들기 위해서는 아래와 같이 다양한 기술들이 필요한데 그 중 하나가 HTTP프로토콜이다.

- **HTTP (HTTPs -> SSL/TLS)** : html과 js css같은 파일을 웹서버에게 요청하고 받아오는 프로토콜
  아래 웹표준은 서버에 있는데 받아와서 실행시키는것. 웹표준데이터를 받아오는 프로토콜이 http /HTTPs = http + 보안
  -- 클라이언트에서 동작한다.
- HTML : 웹페이지를 채울 내용
- JavaScript : 웹페이지에 들어갈 기능
- CSS : 웹페이지 디자인 -웹표준, 클라이언트 컴퓨터에서 동작 하는 코드들. 클라이언트 사이드 스크립트.
- JSP+Spring, node ,php : 서버 컴퓨터에서 동작하는 코드
- DB, Ajax 등..

## HTTP 프로토콜의 특징
HyperText Transfer Protocol(하이퍼 텍스트 전송 프로토콜)  
www에서 쓰이는 핵심 프로토콜로 문서의 전송을 위해 쓰이며,
오늘날 거의 모든 웹 애플리케이션에서 사용되고 있다.
Request / Response ( 요청/응답 ) 동작에 기반하여 서비스 제공한다.
옛날에는 html문서만 전송하는데 쓰였다면 오늘날은 음성, 화상 등 여러 종류의 데이터를 MIME로 정의하여 전송한다.


##  http 1.0 /  http 1.1 
- http 1.0 특징 ( 요즘은 안쓴다 ) 
  -  “연결 수립, 동작, 연결 해제”의 단순함이 특징
  -> 하나의 URL은 하나의 TCP 연결
  - HTML 문서를 전송 받은 뒤 연결을 끊고 다시 연결하여 데이터를 전송한다.
  HTPP 1.0의 문제점
  - 단순 동작 ( 연결 수립, 동작, 연결 해제 )이 반복되어 통신 부하 문제 발생

- http 1.1 특징
  -  HTTP 1.0과 호환 가능
  -  Multiple Request 처리가 가능하여 Client의 Request가 많을 경우
  연속적인 응답 제공 -> Pipeline 방식의 Request / Response 진행
  -  HTTP 1.0과는 달리 Server가 갖는 하나의 IP Address와
  다수의 Web Site 연결 가능
  HTTP 1.1
  - 빠른 속도와 Internet Protocol 설계에 최적화될 수 있도록 Cache 사용
  -  Data를 압축해서 전달이 가능하도록 하여 전달하는 Data 양이 감소

- HTTP 프로토콜의 통신 과정
  http 1.0은 요청할때 마다 핸드쉐이크를 해줬어야 한다. 1.1은 연결한번 했으면 끊지 말고 종료하면 끊는다. 

## HTTP 요청 프로토콜

요청하는 방식을 정의하고 클라이언트의 정보를 담고 있는 HTTP 요청 프로토콜 구조

1. Request Line
2. Hearders : 옵션이라 생각
3. 공백 : 한줄 들어간다.
4. Body : data가 들어감

==요청프로토콜의 실제 구조==
```
//Request Line
GET /produ/content.asp?code=sch-v310 HTTP/1.1
//Hearders
Accept: image/gif, image/jpeg, image/pjpeg, image/pjpeg,
application/x-shockwave-flash,
application/vnd.ms-excel, application/vnd.ms-powerpoint, application/msword,
application/xaml+xml, application/x-ms-xbap, application/x-ms-application, */*
Referer: http://www.sst.com/
Accept-Language: ko
User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0;
InfoPath.3; .NET4.0C; .NET4.0E)
Accept-Encoding: gzip, deflate
Host: www.sst.com
Proxy-Connection: Keep-Alive
Cookie: ASPSESSIONIDCCDQARAS=EMCDFFBCECFHKPAGOADOIOIE
//공백
//Body
```

* Request Line  
   요청 타입 | 공백(띄어쓰기) | URI | 공백(띄어쓰기) | HTTP 버전

**요청타입**
| 메소드 | 종류 설명|
| --- | --- |
| **GET**| Client가 Server로부터 문서를 읽어오려 할 때 사용|
| HEAD| Client가 문서가 아닌 문서에 대한 특정 정보를 원할 경우 사용|
| **POST** | Client가 Server에게 어떤 정보를 전송할 때 사용|
| PUT| Client가 Server에 특정 자원을 업로드할 때 사용|
| PATCH| PUT과 비슷함, 기존 파일에서 변경사항만을 포함|
| COPY| 파일을 다른 위치로 복사하기 위해 사용|  
| MOVE | 파일을 다른 위치로 이동하기 위해 사용|
| DELETE | Server에서 문서를 제거하기 위해 사용|
| LINK | 문서에서 다른 위치로의 링크를 생성하기 위해 사용|
| UNLINK | LINK Method에 의해 생성된 링크를 삭제하기 위해 사용|
| OPTION | Client가 Server에게 사용 가능한 옵션을 질의하기 위해 사용|


* get 요청 프로토콜과 post 요청 프로토콜의 차이   
  get방식은 데이터를 보낼때 URI부분에 포함시켜서 보낸다. `https://www.naver.com/weekday?thu...`    
  post는 body에 포함시켜서 보낸다.  

**요청 타입URI(Uniform Resource Identifier)**
 인터넷 상에서 특정 자원(파일)을 나타내는 유일한 주소
 예시 : `https://www.youtube.com/watch?v=2ikhZ_fNP5Y&list=PL0d8NnikouEWcF1jJueLdjRIC4HsUlULi&index=30`
```
 scheme://host[:port][/path][?query]
예시)
 ftp://IP주소:포트/파일이름
 http://IP주소:포트/폴더이름/파일이름
 --
 scheme: 요청하는 요청형식 보통 7계층 프로토콜 형식을 지정하면된다.
 host:port : 
  ip주소:port 보통 도메인 주소 쓰지만 DNS서버가 IP주소 바꿔준다. 
  만약 포트 안쓰면  80 or 443번주소 알아서 써준다.  
 path: url은 location 해당 위치에 해당파일(예전 느낌) 파일에 데이터를 전달해주면 그 파일이 실행되서 정보받아서 준다.
```

## HTTP 응답 프로토콜

사용자가 볼 웹 페이지를 담고있는 응답 프로토콜 구조

1. Status Line
2. Headers
3. 공백
4. Body - 데이터


==응답프로토콜의 실제 구조==
```
// Status Line
HTTP/1.1 200 OK
//Headers
Date: Fri, 25 Mar 2011 06:54:45 GMT
Server: Microsoft-IIS/6.0
X-Powered-By: ASP.NET
Content-Length: 93639
Content-Type: text/html
Set-Cookie: ASPSESSIONIDACAQARBT=HMJLELBCDNGEJCLNAMJFLCBO;
path=/
Cache-control: private
//공백

//Body
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=euc-kr">
<title>『Magicimt』</title>
<style type="text/css">
…
```

* Status Line  
HTTP 버전 |공백 |상태 코드 |공백 |상태 문구

* 상태 코드
100 ~ 199 단순한 정보  
200 ~ 299 Client의 요청이 성공 /성공적인 통신  
300 ~ 399 Client의 요청이 수행되지 않아 다른 URL로 재지정  
400 ~ 499 Client의 요청이 불완전하여 다른 정보가 필요 /클라이언트의 실수, 잘못, 오류  
500 ~ 599 Server의 오류를 만나거나 Client의 요청 수행 불가 /서버의 실수, 잘못, 오류  

* 대표 상태 코드  

| 상태 코드 종류 | 상태 문구 | 설명 |  
| --- | --- | --- |  
| 200 |OK| Client의 요청이 성공했다는 것을 나타낸다|  
| 403 |Forbidden |Client가 권한이 없는 페이지를 요청했을 때|   
| 404 |Not Found| Client가 서버에 없는 페이지를 요청했을 때|  
| 500 |Internal Server Error |Server의 일부가 멈췄거나 설정 오류가 발생|  
| 503 |Service Unavailable| 최대 Session 수를 초과했을 때|  

## HTTP 헤더 포맷

- 수많은 정보를 담고 있는 HTTP 헤더
요청 : 일반, 요청, 항목 헤더
응답 : 일반, 응답, 항목 헤더

* **일반 헤더**

일반적인 정보를 담고 있는 일반 헤더

|헤더 종류 | 설명|
| --- | --- |
|Content-Length | 메시지 바디 길이를 나타낼 때 쓰인다|
|Content-Type | 메시지 바디에 들어있는 컨텐츠 종류( Ex: HTML 문서는 text/html )|

* **요청 헤더**

클라이언트 정보를 담고 있는 요청 헤더

| 헤더 종류 | 설명|
| --- | --- |
| Cookie | 서버로부터 받은 쿠키를 다시 서버에게 보내주는 역할을 한다| 
| Host | 요청된 URL에 나타난 호스트명을 상세하게 표시 (HTTP 1.1은 필수)| 
| User-Agent | Client Program에 대한 식별 가능 정보를 제공한다 ex. 운영체제나 브라우저 버전 같은거 그래서 기기에 맞는거 볼 수 있다. | 

* **응답 헤더**

서버 정보를 담고 있는 응답 헤더

| 헤더 종류 | 설명| 
| --- | --- |
| Server | 사용하고 있는 웹서버의 소프트웨어에 대한 정보를 포함| 
| Set-Cookie | 쿠키를 생성하고 브라우저에 보낼 때 사용. 해당 쿠키 값을 브라우저가 서버에게 다시 보낼 때 사용한다| 


http는 실은 이 이상으로 더 깊게 공부해야 하는 부분이다. http부분(+tcp)만 추가 공부하자:fire:

## Reference
[따라하며 배우는 IT - 네트워크 기초(YouTube)](https://www.youtube.com/playlist?list=PL0d8NnikouEWcF1jJueLdjRIC4HsUlULi)
