---
title: 2022 Kick Start Round A - Palindrome Free Strings
lang: ko
description: PS 회고 - 2022 Kick Start Round A
meta:
  - property: og:title
    content: 2022 Kick Start Round A - Palindrome Free Strings
  - property: og:description
    content: PS 회고 - 2022 Kick Start Round A
tags: ["algorithm", "problem solving"]
shortDescription: "2022 Kick Start Round A 회고"
writtenDate: "2022-05-01 18:00:00"
modifiedDate: "2022-05-18 18:00:00"
---

# {{ $frontmatter.title }}

## Description

0, 1, 그리고 ?로 이루어진 문자열 `S`가 주어진다. ?는 0 또는 1로 교체할 수 있다.  
모든 ?을 0 또는 1로 바꾸어서 길이 5 이상의 팰린드롬인 부분 문자열이 존재하지 않는 문자열을 만들 수 있는지 판단하는 프로그램을 작성하여라.

### input

첫 번째 줄에 테스트 케이스의 수인 `T`가 주어지고, 다음 줄 부터 `T`개의 테스트 케이스가 제시된다.  

각 테스트 케이스는 두 줄로 이루어져 있다:  
첫 번째 줄에는 문자열 `S`의 길이 `N`이 주어진다.  
두 번째 줄에는 문자열 `S`가 주어진다.

### output

모든 ?을 0 또는 1로 교체하여 길이 5 이상의 팰린드롬인 부분 문자열이 존재하지 않는 문자열을 만들 수 있으면 POSSIBLE,  
불가능하면 IMPOSSIBLE을 출력하라.

### limit

Memory limit: 1 GB
1 ≤ `T` ≤ 100  
`S` 는 0, 1, ?로만 이루어져있다.

Test Set 1
* Time limit: 20 seconds.
* 1 ≤ `N` ≤ 15

Test Set 2
* Time limit: 90 seconds.
* 1 ≤ `N` ≤ 5×10<sup>4</sup>

## Note

`N`이 4 이하인 경우에는 답이 항상 IMPOSSIBLE이므로 `N`이 5 이상인 경우만 고려한다.

단순하게는 `S`의 모든 ?를 0 또는 1로 대체한 모든 경우의 수를 확인하는 방법이 있다.  
모든 경우의 수를 생성할 때 _O(2<sup>N</sup>)_ 이고, 각 경우의 수에 대해 길이 5 이상의 팰린드롬인 부분 문자열이 존재하는지 체크하는 과정은 brute force로 _O(N<sup>2</sup> * N)_, [Manacher's algorithm](https://en.wikipedia.org/wiki/Longest_palindromic_substring#Manacher's_algorithm) 등의 효율적인 알고리즘으로 _O(N)_ 에 처리할 수 있다.  
따라서 모든 경우의 수를 확인하는 방법은 _O(2<sup>N</sup> * N) ~ O(2<sup>N</sup> * N<sup>3</sup>)_ 임을 알 수 있다. Test Set 1 의 경우 `N`이 최대 15에 불과하므로 이 방법으로 충분히 해결 가능하다.

그러나 Test Set 2를 해결하기 위해서는 더 효율적인 방법이 필요하다.  
우선, 길이 5 이상의 팰린드롬은 내부에 길이가 5 또는 6인 또다른 팰린드롬을 항상 갖는다. 주어진 팰린드롬의 맨앞과 맨뒤 글자를 하나씩 제거할 때 길이가 5 또는 6이 되는 순간이 존재하고, 이때 남아있는 문자열 역시 팰린드롬을 이루어야하므로 이는 자명하다.  
따라서 길이가 5 이상인 팰린드롬을 포함하지 않는 어떤 문자열 `S'`가 있을 때, 이 문자열 뒤에 0 또는 1을 붙였을 때도 여전히 유효한 문자열이 되는 지는 `S'`의 마지막 문자 5개가 결정한다. 즉, 조건을 만족하는 문자열을 생성하는 과정은 다음과 같은 finite state machine으로 나타낼 수 있다.  
![Palindrome Finite State Machine](/images/2022-kickstart-A-finite-state-machine.png)  
예를 들어서, 마지막 5개의 문자가 11101일 때, 0을 붙이면 여전히 유효한 문자열이지만 1을 추가하면 11011이 생성되어 조건을 만족하지 못한다.  
이 그래프에서 주목할 만한 점은, 좌우측 안쪽에 사이클이 하나씩 존재하고 이 두 사이클은 서로 완전히 분리되어있다. 따라서 이 fsm을 이용해 유효한 문자열을 생성하려면 두 사이클 중 하나를 반복해야한다. 그리고 그래프에서 두 사이클에 진입하기 전과 후에 지날 수 있는 가장 긴 path의 길이는 각각 2이므로, 길이가 임의의 값 `M`인 유효한 문자열의 갯수는 항상 최대 4 * 12 * 4 = 192개이다. 이는 단순히 경우의 수만으로 간단히 구한 것으로, 위 그래프를 보고 실제 최댓값을 구해보면 36이 된다.

이를 바탕으로, 주어진 문자열 `S`에서 처음부터 5번째 문자까지를 prefix로 두고 그 prefix에 6번째 문자부터 하나씩 추가해보며 계속해서 유효한 문자열이 만들어지는지 확인한다. ?가 등장하면 0과 1를 모두 시도해본다. 이때 유효하지 않은 문자열이 생성되면 즉시 해당 탐색 영역을 무시하고 되돌아간다.  
각 길이 별로 유효한 문자열의 수가 최대 36임을 알고 있으므로, 이 방법을 사용하면 O(36*N) 만큼의 시간이 소요되어 linear time에 문제를 해결할 수 있다.

## Link
[2022 Kick Start Round A - Palindrome Free Strings](https://codingcompetitions.withgoogle.com/kickstart/round/00000000008cb33e/00000000009e762e)
