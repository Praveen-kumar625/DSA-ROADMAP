export const roadmapData = {
  phases: [
    {
      id: 1,
      title: "Phase 1: Foundations",
      subtitle: "Java + DSA Basics (Shuruwat Yahan Se)",
      weeks: "1-2",
      quote: "Bina foundation ke building nahi banti, mere dost. Let's build it strong!",
      didYouKnow: "Kya aapko pata hai? Java's String is immutable taaki memory bache (String Pool) aur security bani rahe.",
      difficulty: "Easy",
      color: "green",
      days: [
        { id: "p1d1", days: "1-2", title: "Java Syntax & OOP Recap", goal: "Refresh basic Java concepts", concept: "Classes & Objects", task: "Basic Classes likho", revision: "JDK vs JRE vs JVM", problem: "Java Basics", difficulty: "Easy" },
        { id: "p1d2", days: "3-4", title: "Polymorphism & Interfaces", goal: "OOP Pillars", concept: "Abstraction", task: "Interface impl", revision: "Overload vs Override", problem: "OOP Quizzes", difficulty: "Easy" },
        { id: "p1d3", days: "5", title: "Java Collections Framework", goal: "In-built DS", concept: "List, Set, Map", task: "Maps iterate", revision: "ArrayList vs Vector", problem: "Freq Counters", difficulty: "Medium" },
        { id: "p1d4", days: "6-7", title: "Big-O Notation", goal: "Time & Space", concept: "O(1), O(N), O(N^2)", task: "Loops analyze", revision: "Drop constants", problem: "Big-O Quiz", difficulty: "Medium" },
        { id: "p1d5", days: "8-10", title: "Arrays (1D & 2D)", goal: "Traversal & Matrices", concept: "Contiguous memory", task: "Matrix rotation", revision: "0-based indexing", problem: "Rotate Array", difficulty: "Medium" },
        { id: "p1d6", days: "11-13", title: "Strings & Bit Manip.", goal: "StringBuilder & XOR Tricks", concept: "Immutability, Bits", task: "Count set bits", revision: "XOR logic", problem: "Valid Palindrome", difficulty: "Medium" },
        { id: "p1d7", days: "14", title: "Phase 1 Revision Sprint", goal: "Solidify concepts", concept: "Flashcards", task: "Re-solve bugs", revision: "Core Java", problem: "Weekly Contest", difficulty: "Revision" }
      ],
      quiz: [
        { question: "Java mein String immutable kyun hoti hai, bhai?", options: ["Taaki String Pool caching use ho sake", "Security ke liye", "Thread safety maintain karne ke liye", "Upar diye gaye sabhi reasons"], answer: 3 },
        { question: "Array ka index 0 se kyun start hota hai?", options: ["Kyunki memory address base + (0 * size) se calc hota hai", "Java walo ki marzi", "0 lucky number hai", "Negative indexing allow karne ke liye"], answer: 0 },
        { question: "O(N) aur O(1) mein better konsa hai?", options: ["O(N) kyunki N > 1", "O(1) kyunki constant time hai", "Dono same hain", "Depend karta hai OS pe"], answer: 1 }
      ]
    },
    {
      id: 2,
      title: "Phase 2: Linear Data Structures",
      subtitle: "Arrays, Linked Lists, Stacks & Queues",
      weeks: "3-5",
      quote: "Pointers se darna nahi hai, ye sirf memory ka address rakhte hain!",
      didYouKnow: "Deque (Double Ended Queue) Stack aur Queue dono ka kaam kar sakta hai!",
      difficulty: "Medium",
      color: "yellow",
      days: [
        { id: "p2d1", days: "15-18", title: "Singly & Doubly Linked L.", goal: "Node manipulation", concept: "Pointers & Refs", task: "Reverse LL", revision: "Track next pointer", problem: "Reverse LL", difficulty: "Medium" },
        { id: "p2d2", days: "19-21", title: "Fast & Slow Pointers", goal: "Cycle detect", concept: "Floyd Algorithm", task: "Find cycle start", revision: "Slow = 1, Fast = 2", problem: "Linked List Cycle", difficulty: "Medium" },
        { id: "p2d3", days: "22-25", title: "Stacks (LIFO)", goal: "LIFO logic", concept: "Push, Pop, Peek", task: "Array impl", revision: "Monotonic Stacks", problem: "Valid Parentheses", difficulty: "Medium" },
        { id: "p2d4", days: "26-29", title: "Queues & Deque (FIFO)", goal: "FIFO logic", concept: "Enqueue, Dequeue", task: "Queue via Stack", revision: "ArrayDeque", problem: "Sliding Win Max", difficulty: "Medium" },
        { id: "p2d5", days: "30-34", title: "Hash Tables (Maps/Sets)", goal: "O(1) Lookups", concept: "Hash collisions", task: "Frequency maps", revision: "equals & hashCode", problem: "Two Sum", difficulty: "Medium" },
        { id: "p2d6", days: "35", title: "Phase 2 Mock & Revision", goal: "Timed assessment", concept: "Review patterns", task: "3 Random LC Meds", revision: "Pointer safety", problem: "Virtual Test", difficulty: "Mock" }
      ],
      quiz: [
        { question: "HashMap mein element search karne ki average time complexity?", options: ["O(N)", "O(log N)", "O(1)", "O(N log N)"], answer: 2 },
        { question: "LIFO principle kis data structure mein hota hai?", options: ["Queue", "Stack", "Linked List", "Array"], answer: 1 },
        { question: "Cycle detect karne ke liye konsa algo use hota hai?", options: ["Dijkstra", "Floyd Cycle Detection (Tortoise and Hare)", "Binary Search", "Kruskal"], answer: 1 }
      ]
    },
    {
      id: 3,
      title: "Phase 3: Trees & Recursion",
      subtitle: "Mastering the Hierarchies",
      weeks: "6-9",
      quote: "Recursion ko samajhne ke liye, pehle recursion ko samajhna padega. Haha!",
      didYouKnow: "Har recursive approach ko iterative way mein solve kiya ja sakta hai Stack use karke.",
      difficulty: "Hard",
      color: "red",
      days: [
        { id: "p3d1", days: "36-40", title: "Recursion Basics", goal: "Base conditions", concept: "Call Stack memory", task: "Factorial, Fib", revision: "Define base condition!", problem: "Pow(x, n)", difficulty: "Medium" },
        { id: "p3d2", days: "41-47", title: "Binary Trees (BT)", goal: "Traversals", concept: "In/Pre/Post order", task: "Height, Dia.", revision: "BFS uses Queue", problem: "Level Order", difficulty: "Medium" },
        { id: "p3d3", days: "48-52", title: "Binary Search Trees (BST)", goal: "O(log N) ops", concept: "Left < Node < Right", task: "Insert/Delete", revision: "Inorder is sorted!", problem: "Validate BST", difficulty: "Hard" },
        { id: "p3d4", days: "53-57", title: "Heaps & PriorityQueue", goal: "Min/Max fast", concept: "Heapify", task: "Kth largest elem", revision: "PQ is MinHeap default", problem: "Kth Largest", difficulty: "Hard" },
        { id: "p3d5", days: "58-63", title: "Trie (Prefix Tree)", goal: "Autocomplete", concept: "Array of pointers", task: "Insert/Search", revision: "26 child nodes", problem: "Implement Trie", difficulty: "Hard" }
      ],
      quiz: [
        { question: "BST ka konsa traversal sorted order deta hai?", options: ["Pre-order", "In-order", "Post-order", "Level-order"], answer: 1 },
        { question: "Recursion mein konsi cheez sabse important hai?", options: ["Loop", "Base Case", "Variables", "Return statement"], answer: 1 },
        { question: "PriorityQueue Java mein default kaisa behave karti hai?", options: ["MaxHeap", "MinHeap", "BST", "Array"], answer: 1 }
      ]
    },
    {
      id: 4,
      title: "Phase 4: Graphs & Advanced Trees",
      subtitle: "The Network Algorithms",
      weeks: "10-13",
      quote: "Zindagi ek graph hai doston. Apna shortest path to success dhundho!",
      didYouKnow: "Dijkstra greedy algorithm hai. Bellman-Ford negative weights handle kar sakta hai but slow hota hai.",
      difficulty: "Hard",
      color: "red",
      days: [
        { id: "p4d1", days: "64-68", title: "Graph Fundamentals", goal: "Adj Matrix vs List", concept: "BFS & DFS", task: "Traversal loops", revision: "Track visited nodes", problem: "Number of Islands", difficulty: "Medium" },
        { id: "p4d2", days: "69-72", title: "Cycle Det. & Topo Sort", goal: "DAG deps", concept: "Kahn Algorithm", task: "Find cycle", revision: "Topo Sort sirf DAGs pe", problem: "Course Schedule", difficulty: "Hard" },
        { id: "p4d3", days: "73-80", title: "Shortest Path Algos", goal: "Dijkstra & Bellman", concept: "Relaxation", task: "PQ for Dijkstra", revision: "Dijkstra fails on -ve", problem: "Network Delay Time", difficulty: "Hard" },
        { id: "p4d4", days: "81-85", title: "MST & Disjoint Set", goal: "Kruskal & Prim", concept: "Union by Rank", task: "Path Compression", revision: "Find() is O(1)", problem: "Min Cost Connect", difficulty: "Hard" },
        { id: "p4d5", days: "86-91", title: "Phase 4 Graph Sprints", goal: "Graph Hard Problems", concept: "Bipartite Graphs", task: "Word Ladder", revision: "Visited states map", problem: "Word Ladder", difficulty: "Mock" }
      ],
      quiz: [
        { question: "Negative edge weights ke liye shortest path algo?", options: ["Dijkstra", "Bellman-Ford", "BFS", "Kruskal"], answer: 1 },
        { question: "Topological Sort kis type ke graph pe apply hota hai?", options: ["Undirected", "Cyclic", "DAG (Directed Acyclic Graph)", "Bipartite"], answer: 2 },
        { question: "BFS implement karne ke liye commonly kya use hota hai?", options: ["Stack", "Queue", "PriorityQueue", "Tree"], answer: 1 }
      ]
    },
    {
      id: 5,
      title: "Phase 5: Algorithms & Techniques",
      subtitle: "DP, Greedy & More",
      weeks: "14-18",
      quote: "Problem ko divide karo, aur interview ko conquer karo!",
      didYouKnow: "Dynamic Programming basically recursion + memoization hai taaki redundant calculations na hon!",
      difficulty: "Hard",
      color: "red",
      days: [
        { id: "p5d1", days: "92-102", title: "Sort & Binary Search", goal: "Search Space", concept: "Mid calc safe", task: "Search Rotated", revision: "mid = s+(e-s)/2", problem: "Koko Eating", difficulty: "Medium" },
        { id: "p5d2", days: "103-109", title: "Two Pointers & Sliding Win", goal: "O(N^2) to O(N)", concept: "Shrink/Expand", task: "Max Sum Subarray", revision: "Track boundaries", problem: "Longest Substring", difficulty: "Medium" },
        { id: "p5d3", days: "110-115", title: "Greedy & Backtracking", goal: "Explore choices", concept: "State tree", task: "N-Queens", revision: "Undo choice (pop)", problem: "Permutations", difficulty: "Hard" },
        { id: "p5d4", days: "116-126", title: "Dynamic Programming", goal: "Memoization to Tab", concept: "Overlapping SubP", task: "Knapsack, LCS", revision: "Draw recursive tree", problem: "Climbing Stairs", difficulty: "Hard" }
      ],
      quiz: [
        { question: "DP problems ki 2 main properties kya hain?", options: ["Greedy & Optimal substructure", "Overlapping subproblems & Optimal substructure", "Divide & Memoization", "Backtracking & Pruning"], answer: 1 },
        { question: "Sliding Window technique kiske liye best hai?", options: ["Sorting", "Subarrays / Substrings", "Graph Traversal", "Tree balancing"], answer: 1 },
        { question: "Backtracking mein hum kya karte hain?", options: ["Hamesha aage badhte hain", "Dead end aane pe peechhe aake naya raasta try karte hain", "Random paths lete hain", "Dynamic Programming lagate hain"], answer: 1 }
      ]
    },
    {
      id: 6,
      title: "Phase 6: Interview Prep & Mock Practice",
      subtitle: "The Final Polish",
      weeks: "19-24",
      quote: "Practice mein jitna pasina bahaoge, interview mein utna kam khoon bahega.",
      didYouKnow: "Communication is 50% of the interview. Hamesha apna thought process bolo (Think out loud)!",
      difficulty: "Expert",
      color: "purple",
      days: [
        { id: "p6d1", days: "127-140", title: "Top 150 Blind/Striver", goal: "Pattern identify", concept: "Systemic approach", task: "2-3 Mediums", revision: "Don't look at soln!", problem: "Blind 75", difficulty: "Mock" },
        { id: "p6d2", days: "141-150", title: "OOP & Core CS", goal: "CS Core", concept: "OS, DBMS", task: "SQL Queries", revision: "ACID, Normalization", problem: "SQL schema", difficulty: "Medium" },
        { id: "p6d3", days: "151-168", title: "Mock Interviews", goal: "Think out loud!", concept: "Time mgmt", task: "Pramp mocks", revision: "Communicate approach", problem: "Weekly Contest", difficulty: "Mock" }
      ],
      quiz: [
        { question: "DBMS mein ACID ki I ka kya matlab hai?", options: ["Inconsistency", "Isolation", "Integration", "Indexing"], answer: 1 },
        { question: "Interview ka sabse imp hissa kya hota hai?", options: ["Sirf code likhna", "Chup chaap code likhna", "Apna thought process (Approach) communicate karna", "Jaldi khatam karna"], answer: 2 },
        { question: "Konsa scheduling algorithm starvation cause kar sakta hai?", options: ["Round Robin", "Shortest Job First (SJF)", "FCFS", "Multilevel Queue"], answer: 1 }
      ]
    }
  ],
  weeklyTracker: [
    { week: "W1", topics: "Java Foundations & OOP (Basics)", target: 15 },
    { week: "W2", topics: "Time Complexity, Arrays", target: 20 },
    { week: "W3", topics: "Linked Lists Deep Dive", target: 25 },
    { week: "W4", topics: "Stacks & Queues", target: 20 },
    { week: "W5", topics: "HashMaps & Mixed DS", target: 30 },
    { week: "W6", topics: "Recursion Basics", target: 20 },
    { week: "W7", topics: "Advanced Recursion", target: 20 },
    { week: "W8", topics: "Binary Trees (BFS/DFS)", target: 25 },
    { week: "W9", topics: "BST & Tries", target: 25 },
    { week: "W10", topics: "Graph Fundamentals", target: 15 },
    { week: "W11", topics: "Shortest Path Algos", target: 15 },
    { week: "W12", topics: "MST & Disjoint Sets", target: 20 },
    { week: "W13", topics: "Graph Advanced", target: 20 },
    { week: "W14", topics: "Sorting & Searching", target: 25 },
    { week: "W15", topics: "Two Pointers & Sliding Win", target: 30 },
    { week: "W16", topics: "Greedy Algorithms", target: 20 },
    { week: "W17", topics: "Dynamic Programming (1D)", target: 20 },
    { week: "W18", topics: "DP (2D, Strings, Knapsack)", target: 25 },
    { week: "W19", topics: "Mixed Interview Prep", target: 30 },
    { week: "W20", topics: "Top 150 LeetCode Sprint", target: 35 },
    { week: "W21", topics: "Top 150 LeetCode Sprint", target: 35 },
    { week: "W22", topics: "System Design Basics", target: 10 },
    { week: "W23", topics: "Mock Interviews & Revision", target: 20 },
    { week: "W24", topics: "Final Polish (Interview Ready!)", target: 20 }
  ],
  badges: [
    { id: "b1", icon: "🗡️", name: "Array Assassin", description: "Phase 1 Complete (Basics Cleared)" },
    { id: "b2", icon: "🔗", name: "Link Lord", description: "Phase 2 Complete (Pointers Mastered)" },
    { id: "b3", icon: "🌲", name: "Tree Whisperer", description: "Phase 3 Complete (Recursion Master)" },
    { id: "b4", icon: "🕸️", name: "Graph Guru", description: "Phase 4 Complete (Graph Pro)" },
    { id: "b5", icon: "🐉", name: "DP Dragon", description: "Phase 5 Complete (Algo Boss)" },
    { id: "b6", icon: "💼", name: "Interview Ready", description: "All Phases Complete (Job Ready!)" }
  ],
  cheatsheet: [
    { title: "Array Sorting", code: "Arrays.sort(arr); // Primitives: O(N log N)\nArrays.sort(arr, Collections.reverseOrder()); // Objects only" },
    { title: "HashMap Freq Count", code: "HashMap<Integer, Integer> map = new HashMap<>();\nmap.put(key, map.getOrDefault(key, 0) + 1);\nfor (Map.Entry<Integer, Integer> entry : map.entrySet()) { ... }" },
    { title: "PriorityQueue", code: "PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // Default\nPriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());" },
    { title: "Strings", code: "char[] chars = str.toCharArray();\nString s = String.valueOf(chars);\nStringBuilder sb = new StringBuilder(); // Loop mein String concatenation!" }
  ],
  resources: [
    { title: "Code with Harry (DSA Complete)", lang: "C", type: "primary", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi", desc: "92 videos | Zero to Advanced | C Language" },
    { title: "CodeHelp (Love Babbar)", lang: "C++", type: "alternative", url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA", desc: "Highly recommended for placement prep" },
    { title: "Community Classroom (Kunal)", lang: "Java", type: "alternative", url: "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ", desc: "Detailed and free Java DSA course" },
    { title: "Apna College", lang: "C++", type: "alternative", url: "https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ", desc: "Structured C++ DSA" },
    { title: "Jenny's Lectures", lang: "C++", type: "alternative", url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU", desc: "Great for university exams and basics" },
    { title: "Anuj Bhaiya", lang: "Java", type: "alternative", url: "https://www.youtube.com/playlist?list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p", desc: "Clear Java explanations" }
  ],
  prerequisites: [
    { title: "C Language (Harry)", url: "https://www.youtube.com/playlist?list=PL7ersPsTyYt2Q-SqZxTA1D-melSfqBRMW" },
    { title: "C++ (Harry)", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL" },
    { title: "Java (Harry)", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" }
  ]
};
