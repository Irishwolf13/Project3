puts "🌱 Seeding spices..."

puts "Seeding Users"
  User.create(user_name: "Rooney", password: "frank")
  User.create(user_name: "Chase", password: "tailwind")
  User.create(user_name: "Tatiana", password: "mastermind")
  User.create(user_name: "Dylan", password: "thatvoice")
  User.create(user_name: "Liza", password: "pretzelcolon")
  User.create(user_name: "Jerrod", password: "toofunny")
  User.create(user_name: "Jess", password: "cssqueen")
  User.create(user_name: "Nadia", password: "bigbrain")
  User.create(user_name: "Clyde", password: "gpsking")
  User.create(user_name: "Yeeun", password: "realrachel")

puts "Seeding Problems"
Problem.create(
  question: "Return the sum of two numbers",
  difficulty: "easy",
  date: Faker::Date.between(from: '2023-01-01', to: '2023-02-14')
)
Problem.create(
  question: "Return the total sum of an array of numbers",
  difficulty: "easy",
  date: Faker::Date.between(from: '2023-01-01', to: '2023-02-14')
)
Problem.create(
  question: "Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false" ,
  difficulty: "easy",
  date: Faker::Date.between(from: '2023-01-01', to: '2023-02-14')
)
Problem.create(
  question: "Define a function betweenLogs(lowNum, highNum) that will print every number from lowNum to HighNum, inclusive. Inclusive means that the range includes lowNum and highNum.",
  difficulty: "medium",
  date: Faker::Date.between(from: '2023-01-01', to: '2023-02-14')
)
Problem.create(
  question: 'Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
  Vowels are the letters "a", "e", "i", "o", "u".',
  difficulty: "hard",
  date: Faker::Date.between(from: '2023-01-01', to: '2023-02-14')
)

  20.times do
    Problem.create(
      question: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
      difficulty: "easy",
      date: rand(1..31)
    )
  end
  20.times do
    Problem.create(
      question: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
      difficulty: "medium",
      date: rand(1..31)
    )
  end
  20.times do
    Problem.create(
      question: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
      difficulty: "hard",
      date: rand(1..31)
    )
  end
puts "Seeding Solutions"
  50.times do
    Solution.create(
      solve: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
      num_of_likes: rand(1..250),
      language: "C++",
      user_id: User.all.sample.id,
      problem_id: Problem.all.sample.id
    )
  end
  50.times do
    Solution.create(
      solve: Faker::Lorem.paragraph(sentence_count: 3, supplemental: false, random_sentences_to_add: 6),
      num_of_likes: rand(1..250),
      language: "C#",
      user_id: User.all.sample.id,
      problem_id: Problem.all.sample.id
    )
  end
  50.times do
    Solution.create(
      solve: Faker::Lorem.paragraph(sentence_count: 3, supplemental: false, random_sentences_to_add: 4),
      num_of_likes: rand(1..250),
      language: "Ruby",
      user_id: User.all.sample.id,
      problem_id: Problem.all.sample.id
    )
  end
  50.times do
    Solution.create(
      solve: Faker::Lorem.paragraph(sentence_count: 6, supplemental: false, random_sentences_to_add: 4),
      num_of_likes: rand(1..250),
      language: "Javascript",
      user_id: User.all.sample.id,
      problem_id: Problem.all.sample.id
    )
  end
puts "Seeding Comments"
  1000.times do
    Comment.create(
      comment: Faker::Movies::BackToTheFuture.quote,
      solution_id: Solution.all.sample.id,
      user_id: User.all.sample.id
    )
  end
puts "✅ Done seeding!"
