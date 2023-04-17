const natural = require('natural'); 

class ConversationService {
    
    static createCategory(data) {
        // Defining the categories
        const categories = new natural.BayesClassifier();

        // Adding the categories
        categories.addDocument('estudo', ['estudar', 'escola', 'faculdade']);
        categories.addDocument('casa', ['morar', 'residência', 'lar', 'casa']);
        categories.addDocument('trabalho', ['emprego', 'empresa', 'profissão']);

        // Defining the classifier based on categories
        const classifier = new natural.BayesClassifier();

        // Training the classifier with examples from each category
        const trainingData = [
        { text: 'Estou estudando para uma prova importante', category: 'estudo' },
        { text: 'Comprei um apartamento novo', category: 'casa' },
        { text: 'Gosto do meu trabalho, mas as vezes é cansativo', category: 'trabalho' },
        ];
        trainingData.forEach((example) => classifier.addDocument(example.text, example.category));
        classifier.train();

       // Sorting a text
        const category = classifier.classify(data);

        return category;
    }

}

module.exports = ConversationService;