// Iteration 1: Names and Input
console.log(`FIRST ITERATION \n`)
const hacker1 = "Marc"
console.log("The driver's name is", hacker1)
const hacker2 = "Bogdan"
console.log("The navigator's name is", hacker2)
console.log("\n")

// Iteration 2: Conditionals
console.log(`SECOND ITERATION \n`)
if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}

hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    )
console.log("\n")
// Iteration 3: Loops
// Iteration 3.1:
console.log(`THIRD ITERATION \n`)
const splitHacker1 = hacker1.split("")
const joinedHacker1 = splitHacker1.join(" ")
console.log(joinedHacker1.toUpperCase())

// Iteration 3.2:

const splitHacker2 = hacker2.split("")
const reversedSplitHacker2 = splitHacker2.reverse()
const finalResult = reversedSplitHacker2.join("")
console.log(finalResult)
console.log("\n")

// Iteration 3.3:

if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?")
} else {
  hacker1.localeCompare(hacker2) === 1
    ? console.log("Yo, the navigator goes first definitely.")
    : console.log("The driver's name goes first.")
}
console.log("\n")

// Bonus 1

console.log("BONUS 1\n")

const firstLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate a dolor ac maximus. Duis vulputate sed nisl eget pellentesque. Curabitur non nulla mattis, dignissim ex in, luctus ipsum. Etiam in ligula interdum, dignissim erat ut, placerat leo. Quisque vitae justo blandit, molestie lorem faucibus, malesuada lacus. Integer id turpis mi. Integer sapien magna, sollicitudin ut metus eget, sollicitudin scelerisque ligula. Proin in fermentum purus, in auctor erat. Vestibulum ut pulvinar libero. Aliquam massa turpis, mollis vel vulputate quis, scelerisque quis eros. Donec turpis turpis, accumsan eu est non, dapibus pulvinar felis. Praesent feugiat erat sed turpis lacinia, et facilisis orci rhoncus. Suspendisse faucibus augue orci, at pulvinar mi suscipit nec. Vestibulum posuere sapien vel est rhoncus, sit amet feugiat odio sagittis. Curabitur ut consectetur nibh, et sagittis mi. Donec volutpat luctus nulla et iaculis.

Curabitur eget luctus purus, non viverra enim. Morbi vel neque a nisl tempus iaculis. Aenean a massa vitae diam varius scelerisque. In vehicula egestas dui. Nulla congue leo vitae volutpat aliquet. Vestibulum sit amet urna et massa rhoncus lobortis. Morbi non efficitur magna, non euismod neque. Praesent in tincidunt sapien, ac vehicula orci. Donec rhoncus ut leo ut tempor. Ut pulvinar augue odio, iaculis rutrum mauris varius ac. Morbi placerat nibh mauris, sed vulputate elit egestas non. Fusce vehicula interdum urna, a finibus dolor ultrices nec. Donec aliquet nibh nulla, sed varius nulla imperdiet in. Ut rhoncus sem at lectus iaculis, quis elementum erat sollicitudin.

Nunc gravida nisi sed nisi mattis volutpat. Integer ac dapibus risus. Nam nibh orci, viverra sit amet velit rhoncus, molestie consectetur dui. Maecenas gravida nisi ac posuere posuere. Nullam faucibus risus sed nulla congue ornare. Vestibulum pretium porttitor sapien, in iaculis justo blandit eu. In ac molestie metus. Proin aliquet diam mauris, id porttitor mauris euismod et.

Integer ac commodo nunc. Sed rhoncus arcu sit amet iaculis mattis. Vestibulum velit est, accumsan id ullamcorper a, sollicitudin condimentum velit. Praesent venenatis, odio eget congue interdum, odio quam rutrum orci, sit amet pharetra turpis erat sit amet metus. Vivamus id cursus massa. Fusce tristique scelerisque turpis. Nam sollicitudin libero a erat consectetur mattis. Nulla mollis fermentum lectus a vulputate. Phasellus sit amet vestibulum orci. Fusce nibh mauris, sodales a congue id, interdum sit amet neque. Sed quis iaculis sapien. Sed ullamcorper tellus at nisl consectetur dapibus. Vestibulum lacinia nibh quis turpis hendrerit, ac fermentum mauris dignissim.

In eu metus vitae odio hendrerit elementum a ut elit. Duis porttitor iaculis nulla vitae accumsan. Fusce libero dolor, mollis non lectus eget, tempor tristique tortor. Aliquam vitae mauris accumsan, fermentum dui viverra, laoreet nunc. Cras sit amet ullamcorper velit. Fusce porttitor enim vel ante commodo, ut vehicula diam vulputate. Pellentesque nec metus massa. Sed volutpat vel nunc volutpat scelerisque. Nulla facilisis sit amet risus quis vestibulum. Donec posuere, erat non fringilla tempus, quam nibh dapibus eros, quis molestie dolor mi sed velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis, diam eu tempus vulputate, turpis ante tincidunt nibh, id suscipit elit ante ut mi. Duis lectus augue, imperdiet nec dolor at, pulvinar volutpat velit.`

const secondLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin sapien enim, quis congue diam placerat ac. Duis malesuada ex nisl, in bibendum nibh dapibus vel. Ut sit amet molestie felis. Pellentesque vestibulum sit amet ante ornare pellentesque. Curabitur varius nulla eget dui eleifend ultrices. Aliquam ut nibh eu lacus ultrices scelerisque sed eget ex. Suspendisse a augue a purus laoreet accumsan. In lacinia diam ut sem gravida bibendum. Suspendisse dignissim erat vel sodales mattis. Sed porttitor lorem vel molestie pretium. Mauris porta purus eros, dictum iaculis diam sagittis ultrices. Ut et nisi ut neque accumsan luctus. Fusce ultrices hendrerit massa at euismod. Mauris vel turpis efficitur, accumsan nibh eget, condimentum purus.

Vestibulum interdum sed ante nec semper. In auctor porttitor erat, sit amet vulputate velit interdum vel. Phasellus ultricies metus velit, id tempus mauris euismod a. Nunc ac quam quis purus malesuada volutpat vel luctus ex. Donec mattis lectus sed sapien feugiat imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec facilisis orci sed tortor hendrerit gravida. Pellentesque auctor sem eu magna condimentum ullamcorper. In nunc enim, dignissim non felis et, aliquet semper nunc. Mauris tincidunt, ligula iaculis vestibulum posuere, elit sapien pretium sapien, ut efficitur turpis enim id eros. Quisque vitae iaculis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus vehicula mauris, quis faucibus sapien. Donec vel elit lorem. In hac habitasse platea dictumst.

Fusce id magna magna. Nunc rutrum congue nibh, in convallis purus venenatis at. Cras sit amet dictum dui. Vivamus semper odio hendrerit dolor mollis, id dignissim lorem iaculis. Aliquam at cursus massa. Curabitur sagittis sodales libero vitae placerat. Morbi vulputate gravida mi, in mattis tortor semper et. Donec venenatis turpis non tellus feugiat, posuere malesuada dui cursus. Etiam a ligula faucibus, facilisis augue vel, malesuada nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam interdum odio et risus ultrices sodales. Maecenas molestie rhoncus neque id sodales. Vestibulum quis justo nec risus ornare euismod at id velit.

Curabitur rutrum tortor ac feugiat ultrices. Donec vitae pharetra neque. In tincidunt erat sed mauris varius, eu auctor nisi placerat. Donec dapibus ipsum iaculis finibus dictum. Aenean posuere leo lectus, ut condimentum sem tincidunt ut. Duis id sodales erat. Pellentesque tristique tincidunt sem id fringilla.

Nam nec risus pharetra, pulvinar velit ut, mollis nulla. Quisque ultrices nibh orci, quis venenatis lacus ullamcorper at. Sed sed lacinia leo. Nullam gravida, mi at laoreet ullamcorper, risus neque sollicitudin nunc, sit amet posuere leo lacus sagittis odio. Ut consectetur turpis id ex malesuada, vel accumsan nibh euismod. Mauris elementum neque bibendum lorem interdum lacinia. Integer sit amet fringilla lectus, ut rhoncus nulla. Pellentesque venenatis varius nulla, ut faucibus dolor tristique sed. Fusce et quam eget ligula semper suscipit.`

const thirdLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eleifend pulvinar. Suspendisse pellentesque mi at nunc aliquet congue. Mauris efficitur interdum sollicitudin. Phasellus eu scelerisque neque. Nunc ut varius lectus. Fusce at felis ultrices, euismod diam in, sodales arcu. Sed dignissim vulputate posuere. Maecenas mollis malesuada ligula et pharetra. Etiam vel pretium nisi, in blandit ex.

Morbi in elementum risus. Aliquam erat volutpat. Curabitur at felis dignissim urna efficitur efficitur. Proin mi libero, efficitur a sapien tristique, dapibus lobortis risus. Quisque eget sapien sit amet ex scelerisque hendrerit eget vel magna. Vestibulum cursus porta quam, et fringilla sapien dictum nec. Aenean turpis magna, sagittis vitae ullamcorper a, cursus vitae lectus. Maecenas bibendum elit tortor, eu lobortis odio rhoncus non. Nulla semper semper massa eu laoreet. Etiam ullamcorper commodo commodo.

Maecenas augue lacus, faucibus quis iaculis nec, imperdiet at purus. Sed metus lacus, faucibus ut risus id, pharetra vehicula velit. Aliquam faucibus risus a tortor tincidunt sodales. Proin porta vestibulum sodales. Integer elementum venenatis purus ut laoreet. In et posuere odio. Aliquam sit amet purus varius, sagittis leo non, porttitor massa. Aliquam ultrices nunc sed turpis fringilla ornare.

Phasellus efficitur sem at blandit posuere. Nullam viverra euismod neque, quis consectetur nisi molestie nec. Vivamus iaculis ultrices tempor. Vivamus erat libero, vulputate fringilla nunc eu, venenatis sollicitudin lectus. Pellentesque in risus quis orci mollis fermentum a vitae leo. Sed sit amet pulvinar nisl, vel venenatis lorem. Proin vel venenatis sem. Sed lacinia sem quam. Integer sodales fermentum libero tincidunt vestibulum.

Maecenas pellentesque sapien non accumsan blandit. Fusce ac neque ante. Vivamus eu tincidunt lacus, id vulputate urna. Fusce dictum pharetra luctus. Morbi eleifend tincidunt mauris, ut auctor velit fringilla aliquet. Praesent efficitur felis non nisl rutrum, in tincidunt magna efficitur. Nullam ultricies auctor ornare. Nullam et ante sit amet odio consequat blandit vel vitae dolor.`

const firstLoremWords = firstLorem.split(" ").length
const secondLoremWords = secondLorem.split(" ").length
const thirdLoremWords = thirdLorem.split(" ").length

console.log(
  `Number of words for 1st Lorem: ${firstLoremWords}, 2nd: ${secondLoremWords}, 3rd: ${thirdLoremWords}`
)

const firstLoremEt = firstLorem.split("et").length
const secondLoremEt = secondLorem.split("et").length
const thirdLoremEt = thirdLorem.split("et").length

console.log(
  `Number of "et" for 1st Lorem: ${firstLoremEt}, 2nd: ${secondLoremEt}, 3rd: ${thirdLoremEt}\n`
)

// Bonus 2

console.log("BONUS 2\n")

const phraseToCheck = "Was it a car or a cat I saw?"



const withoutSpecialChars = phraseToCheck.replace(/[,?!'. ]/g, "")

const splitSentence = withoutSpecialChars.split("")
const firstCompare = splitSentence.join("").toLowerCase()

const reversedSentence = splitSentence.reverse()
const secondCompare = reversedSentence.join("").toLowerCase()

firstCompare === secondCompare
  ? console.log("It's a Palindrome! :)")
  : console.log("It's not a Palindrome, bad luck! :(")
