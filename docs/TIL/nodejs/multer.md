---
index: 10
icon: creative
title: multer 모듈 다루기
category:
  - NodeJs
tag:
  - multipart/form-data
  - multer
editLink: false
---

## Multer는 무엇인가?

express 를 사용해서 서버를 구축할 때, multipart/form-data를 이용해서 파일 데이터를 보내면 reqerst의 body데이터가 비어있는 현상이 나타난다. express 기능에는 파일 업로드 기능이 포함되어 있지 않기 때문이다.
multer는 multipart/form-data로 받은 파일을 다루기 위해 사용하는 미들웨어이다.

자세한 내용은 [여기](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)를 참고!

## 기본 사용법

## DiskStorage

- 기본 사용법대로 사용하면, 파일이름이 알수없는 난수로 저장이 된다. 이때 DiskStorage를 사용하면 파일이름을 커스텀 할 수 있다.

## MemoryStorage

- 파일을 서버에 저장하지 않고 사용해야 할 때가 있을 수도 있다. 예를 들어 다른서버로 다시 파일을 전송하거나 해야 할 때, 물론 서버에 저장했다가 다시 읽은후 파일을 지우는 과정을 거칠 수도 있지만 보다시피 번거롭다.
  그때 MemoryStorage를 사용하면 파일을 디스크에 저장하는게 아니라 메모리에 저장해준다.

```


```

메모리 스토리지를 사용시, 매우 큰 사이즈의 파일을 업로드 하거나 많은 양의 비교적 작은 파일들을 매우 빠르게 업로드 하는 경우 응용 프로그램의 메모리 부족이 발생 할 수 있습니다. < -
라는 주의의 말이 있길래 메모리에서는 어떻게 기록되고 언제 사라지는 걸까 궁금해서 찾아봤더니 요청이 끝날때 거의 동시에 사라진다고 한다.

아래와 같이 multer의 memory storage핸들러를 살펴보면 파일은 단순히 콜백(cb)으로 스트리밍되므로 전역 참조가 없다. 그렇기 때문에 메모리에 남지 않고 가비지 컬렉터가 처리할 것이다. 일반적인 경우에는 문제될정도가 아니지만, 문제가 발생할 수 있다는 사실은 고려해야한다.

```
MemoryStorage.prototype._handleFile = function _handleFile (req, file, cb) {
  file.stream.pipe(concat(function (data) {
    cb(null, {
      buffer: data,
      size: data.length
    })
  }))
}
```

[여기 참고](https://stackoverflow.com/questions/45805890/node-multer-memory-storage-how-to-release-memory)
