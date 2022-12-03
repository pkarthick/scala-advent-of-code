"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[871],{7916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=t(7462),a=(t(7294),t(3905)),i=t(6340);const s={},r="Day 2: Rock Paper Scissors",p={unversionedId:"2022/puzzles/day02",id:"2022/puzzles/day02",title:"Day 2: Rock Paper Scissors",description:"by @bishabosha",source:"@site/target/mdoc/2022/puzzles/day02.md",sourceDirName:"2022/puzzles",slug:"/2022/puzzles/day02",permalink:"/scala-advent-of-code/2022/puzzles/day02",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/2022/puzzles/day02.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 1: Calorie Counting",permalink:"/scala-advent-of-code/2022/puzzles/day01"},next:{title:"Day 3: Rucksack Reorganization",permalink:"/scala-advent-of-code/2022/puzzles/day03"}},l={},d=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Final Code",id:"final-code",level:2},{value:"Run it in the browser",id:"run-it-in-the-browser",level:3},{value:"Part 1",id:"part-1",level:4},{value:"Part 2",id:"part-2",level:4},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"day-2-rock-paper-scissors"},"Day 2: Rock Paper Scissors"),(0,a.kt)("p",null,"by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bishabosha"},"@bishabosha")),(0,a.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adventofcode.com/2022/day/2"},"https://adventofcode.com/2022/day/2")),(0,a.kt)("h2",{id:"final-code"},"Final Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import Position.*\n\ndef part1(input: String): Int =\n  scores(input, pickPosition).sum\n\ndef part2(input: String): Int =\n  scores(input, winLoseOrDraw).sum\n\nenum Position:\n  case Rock, Paper, Scissors\n\n  // two positions after this one, wrapping around\n  def winsAgainst: Position = fromOrdinal((ordinal + 2) % 3)\n\n  // one position after this one, wrapping around\n  def losesAgainst: Position = fromOrdinal((ordinal + 1) % 3)\n\nend Position\n\ndef readCode(opponent: String) = opponent match\n  case "A" => Rock\n  case "B" => Paper\n  case "C" => Scissors\n\ndef scores(input: String, strategy: (Position, String) => Position) =\n  for case s"$x $y" <- input.linesIterator yield\n    val opponent = readCode(x)\n    score(opponent, strategy(opponent, y))\n\ndef winLoseOrDraw(opponent: Position, code: String): Position = code match\n  case "X" => opponent.winsAgainst // we need to lose\n  case "Y" => opponent // we need to tie\n  case "Z" => opponent.losesAgainst // we need to win\n\ndef pickPosition(opponent: Position, code: String): Position = code match\n  case "X" => Rock\n  case "Y" => Paper\n  case "Z" => Scissors\n\ndef score(opponent: Position, player: Position): Int =\n  val pointsOutcome =\n    if opponent == player then 3 // tie\n    else if player.winsAgainst == opponent then 6 // win\n    else 0 // lose\n\n  // Rock = 1, Paper = 2, Scissors = 3\n  val pointsPlay = player.ordinal + 1\n\n  pointsPlay + pointsOutcome\nend score\n')),(0,a.kt)("h3",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,a.kt)("h4",{id:"part-1"},"Part 1"),(0,a.kt)(i.Z,{puzzle:"day02-part1",year:"2022",mdxType:"Solver"}),(0,a.kt)("h4",{id:"part-2"},"Part 2"),(0,a.kt)(i.Z,{puzzle:"day02-part2",year:"2022",mdxType:"Solver"}),(0,a.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Jannyboy11/AdventOfCode2022/blob/master/src/main/scala/day02/Day02.scala"},"Solution")," of ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/JanBoerman95"},"Jan Boerman"),".")),(0,a.kt)("p",null,"Share your solution to the Scala community by editing this page."))}u.isMDXComponent=!0}}]);