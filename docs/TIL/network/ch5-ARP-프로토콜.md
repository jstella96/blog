---
index: 2
icon: creative
title: ARP프로토콜
category:
  - Network
tag:
  - 네트워크
editLink: false
---

:::tip
Q. ARP가 하는 일?
Q. ARP 프로토콜의 구조?
Q. IP주소로 MAC주소를 알아오는 과정 ?

:::

## ARP 프로토콜

- ARP가 하는 일
  ARP 프로토콜은 같은 네트워크 대역에서 통신을 하기 위해 필요한 MAC주소를 IP주소를 이용해서 알아오는 프로토콜이다.
  같은 네트워크 대역에서 통신을 한다고 하더라고 데이터를 보내기 위해서는 7계층부터 캡슐화를 통해 데이터를 보내기 때문에 IP주소와 MAC주소가 모두 필요하다.
  이 때 IP주소는 알고 MAC 주소는 모르더라고 ARP를 통해 통신이 가능하다.

## ARP 프로토콜의 통신 과정

![EthernetHeader](./img/ARP.png)

28Byte

- Hardware Type : 2계층에서 사용하는 프로토콜의 타입 주로 0001(Ethernet) (2Byte)
- Protocal Type : 여기서 쓰이는 Protocol Address의 타입 주로 0800(IPv4) (2Byte)
- Hardware Address Length : MAC주소의 길이 6Byte => 06 (1Byte)
- Protocal Address Length : IPv4주소 길이 4Byte => 04 (1Byte)
- Opcode : operation code 어떻게 동작하는지 나타내는, 요청인지(ARP프로토콜로 MAC주소를 물어보는지) 응답인지  
  0001-요청 /0002-응답 (2Byte)
- Source Hardware Address : 출발지의 MAC 주소 (6Byte)
- Source Protocol Address : 출발지의 IP 주소 (4Byte)
- Destination Hardware Address: 목적지의 MAC 주소 (6Byte)
- Destination Protocol Address : 목적지의 IP 주소 (4Byte)

## ARP 테이블

## 실습
