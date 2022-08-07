const bookListRouter = require('express').Router();

const bookListModel = require('../bookListModel/bookListSchema')

// Add a new book in the list

bookListRouter.post('/create', async(req, res) => {

    const newBook = await new bookListModel(req.body);

    newBook.save();
    if (newBook) {
        res.status(201).json({ message: "Book added successfully in the database.", newBook })
    } else {
        res.status(200).json({ message: "Book not added in the database." })
    }


})

// Show all book list

bookListRouter.get('', async(req, res) => {
    const allBooks = await bookListModel.find();
    if (allBooks) {
        res.status(201).json({ message: "All Books ", allBooks })
    } else {
        res.status(404).json({ message: "No Books In Database." })
    }
})


// Search a Book by id

bookListRouter.get('/:id', async(req, res) => {
    const singleBook = await bookListModel.findById({ _id: req.params.id });
    if (singleBook) {
        res.status(201).json({ message: "Book Found ", singleBook })
    } else {
        res.status(404).json({ message: "No Book Found In Database." })
    }
})


// Update a book details by id

bookListRouter.patch('/update/:id', async(req, res) => {
    const singleBook = await bookListModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (singleBook) {
        res.status(201).json({ message: "Book Updated. ", singleBook })
    } else {
        res.status(404).json({ message: "Unable To Update." })
    }
})


// delete a list by id

// bookListRouter.delete('/delete/:id', (req, res) => {

//     bookListModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
//         if (err) {
//             res.status(404).json({ message: "Something went wrong! ", err })
//         } else {
//             res.status(201).json({ message: "Book Successfully Deleted From Database.", data })
//         }
//     })
// })
// delete a list by id

bookListRouter.delete('/delete/:id', async(req, res) => {

    const deleteBook = await bookListModel.findByIdAndDelete({ _id: req.params.id })

    if (deleteBook) {
        res.status(201).json({ message: "Book Delete Success. ", deleteBook })
    } else {
        res.status(404).json({ message: "Something Went Wrong!" })
    }


})









module.exports = bookListRouter;