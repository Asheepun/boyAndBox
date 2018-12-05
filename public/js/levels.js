const levels = [
	{
		template: [
			"...............................O",
			"...............................O",
			"...........................P...0",
			"...............................O",
			"..............................##",
			".........................#######",
			".........................#######",
			"................B........#######",
			".........................#######",
			"........................########",
			".@.................#############",
			"...............#################",
			"...............#################",
			"##.............#################",
			"###..........###################",
			"###......#######################",
			"####...#########################",
			"################################",
		],
		background: "sky",
		time: "day",
	},
	{
		template: [
			"...............................O",
			"...............................O",
			"..............P................O",
			"@..............................0",
			"...............................O",
			"#...........#####.............##",
			"###.......#########....B....####",
			"###.......#########.........####",
			"##........#########.........####",
			"##.........########..........###",
			"##..........#######..........###",
			"###.........#####.............##",
			"###..........##...............##",
			"###...........................##",
			"####..........................##",
			"####.........................###",
			"######......###..............###",
			"#################...........####",
		],
		background: "sky",
		time: "day",
	},
	{
		template: [
			"..............................##",
			"...............................#",
			"...................P...........#",
			"@..............................#",
			"##............................##",
			"####.............#####......####",
			"####....B......#################",
			"####.........###################",
			"###..........##########....#####",
			"###.............#####........###",
			"##.............................O",
			"##.............................O",
			"##.............................0",
			"#..............................O",
			"#..............................O",
			"#........##...................##",
			"##......#####................###",
			"##......#####................###",
		],
		background: "sky",
		time: "day",
	},
	{
		template: [
			"###............................O",
			"##.............................O",
			"##.............................0",
			"##.............................O",
			"##............................##",
			"##...........................###",
			"#............................###",
			"#............................###",
			"#.............................##",
			"#.............P...............##",
			"..............................##",
			"..............................##",
			"...............................#",
			"...............................#",
			"@.....B........................#",
			"##.............................#",
			"##.............................#",
			"###............................#",
		],
		background: "sky",
		time: "day",
	},
	{
		template: [
			"............................####",
			"..............................##",
			"..............................{O",
			"@.............................{0",
			"#.............................{O",
			"##............................{O",
			"##.........................#####",
			"#.........................######",
			"#.......................########",
			"........................########",
			"........................########",
			".................P......########",
			"........................########",
			".......................#########",
			".......................#########",
			"..............B.....b..#########",
			"...................#############",
			".................###############",
		],
		background: "sky",
		time: "day",
		texts: [
			[
				["I can't jump", "this High!"],
				["Will you help me", "get back to my", "village?"]
			],
		]
	},
	{
		template: [
			"###.........######.........#####",
			"##...........####............###",
			".............####............###",
			".............####.............##",
			".............###..............##",
			"@............###..............{O",
			"###...........##..............{0",
			"#####.........##..............{O",
			"#####.........##..............{O",
			"#####.........##.............###",
			"####........................####",
			"####.....P..................####",
			"####...............B........####",
			"###.............##...........###",
			"###..........b..##............##",
			"##...........#####............##",
			"##.........#######.............#",
			"##......##########.............#",
		],
		background: "sky",
		time: "day",
		texts: [
			[
				["I can't cross ", "this gap!"],
			],
		],
	},
	{
		template: [
			"#.........................¤¤¤¤¤¤",
			"#...........................¤¤¤¤",
			"#............................¤¤¤",
			"#.............................{O",
			"#.............................{0",
			"..............................{O",
			"..............................{O",
			"............................###¤",
			"............P..............####¤",
			"@..........................#####",
			"##.........................#####",
			"##..........................####",
			"##.......B........##.........###",
			"##................##.........###",
			"##b...##.........###..........##",
			"###...##.........####.........##",
			"########.........####..........#",
			"#########.......#####..........#",
		],
		background: "sky",
		time: "day",
		texts: [
			[
				["We're almost", "there!"],
			],
		]
	},
	{
		template: [
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤....£..................£....¤¤",
			"...............................O",
			"..................µ............0",
			"...............................O",
			"@..t..................t........O",
			"¤¤¤¤......¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤.....¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤.......¤¤¤¤...¤¤¤.....¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤......¤¤.....£.......¤¤¤¤",
			"¤¤¤..¤¤¤¤....................¤¤¤¤",
			"¤¤....¤¤¤¤...............P...¤¤¤¤",
			"¤¤.....¤¤¤¤¤.................¤¤¤¤",
			"¤¤¤.....¤¤¤¤¤................¤¤¤¤",
			"¤¤¤......¤¤¤¤¤¤¤¤.......t...¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤B",
		],
		background: "planks",
		time: "night",
		texts: [
			[
				["Thank you for", "helping me!"],
				["I'm very gratefull"],
			],
			[
				["Haven't seen you", "here before"],
			],
			[
				["Hello"],
			]
		]
	},
	{
		template: [
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤.....................¤¤¤¤...¤¤",
			"........................¤¤.....O",
			"........................£......0",
			"...............................O",
			"@................t.............O",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤......¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤.....¤¤¤¤¤",
			"¤¤¤¤¤.........¤¤¤¤¤........¤¤¤¤¤¤",
			"¤¤¤............¤¤.........¤¤¤¤¤¤¤",
			"¤¤¤.............£........¤¤¤¤¤¤¤¤",
			"¤¤........P............¤¤¤¤¤¤¤¤¤¤",
			"¤¤.............µ......¤¤¤¤¤..¤¤¤¤",
			"¤¤...................¤¤¤¤....¤¤¤¤",
			"¤¤¤..d=............¤¤¤¤¤...¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤B",
		],
		background: "planks",
		texts: [
			[
				["The others have", "been feeling", "sick lately."],
				["We don't know", "what to do."],
			],
		]
	},
	{
		template: [
			"¤¤¤¤¤¤....................######",
			"¤¤¤¤¤¤......................####",
			"¤¤¤.........................####",
			".£...........................###",
			".............................###",
			"..............................##",
			"@..t...........P..............##",
			"¤¤¤¤¤........................###",
			"¤¤¤¤¤........................###",
			"¤¤##......B...................##",
			"¤¤##...........................O",
			"¤¤##...........................0",
			"¤###...........................O",
			"¤####..........................O",
			"¤####.........................##",
			"¤####........................###",
			"#####........................###",
			"######......................####",
		],
		background: "sky",
		texts: [
			[
				["Be carefull."]
			]
		]
	},
	{
		template: [
			"####.....................#######",
			"###.........................####",
			"###...........................##",
			"###............................O",
			"###............................0",
			"##.............................O",
			"##.............................O",
			"##......................########",
			"#....................###########",
			"#....................###########",
			"......................##########",
			"........................##...###",
			"..............................##",
			"@................##........P..##",
			"###.....B........##....1......##",
			"####............#####........###",
			"####...........#################",
			"####.........###################",
		],
		background: "sky",
		texts: [
			[
				["h"],
			]
		]
	},
	{
		template: [
			"#####.......####################",
			"###...........##################",
			"##............##################",
			"..............##################",
			"...............###########....##",
			"...............######..........O",
			"@..............#####...........0",
			"##..............####..P........O",
			"###.............####....2......O",
			"###...............###........###",
			"###...............######...#####",
			"##................######..######",
			"##..............2..##.....######",
			"##............##..........######",
			"#............####......#########",
			"#............###################",
			"#............###################",
			"#.............##################",
			"#.............##################",
			"B",
		],
		background: "sky",
	},
	{
		template: [
			"###..###########################",
			"##.....#########################",
			"##.........####...##############",
			"#...........##........###..#####",
			"#.......##...........1.##...####",
			".......####.................####",
			".......##################2..####",
			".......##################..#####",
			"@......####....###.........#####",
			"#.....####.P1..##........#######",
			"#..B..#####........##..#########",
			"#.....###############..#########",
			"#.....###############..#########",
			"#.....####...#######....#####..O",
			"#....####..P..##...............0",
			"#....####..........1...........O",
			"#....#####...####..............O",
			"#....###########################",
		],
		background: "sky",
	}
];

export default levels;
