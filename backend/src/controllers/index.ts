class IndexController {
    async getData(req, res) {
        // Logic to retrieve data
        res.json({ message: "Data retrieved successfully" });
    }

    async postData(req, res) {
        // Logic to handle data submission
        res.json({ message: "Data submitted successfully" });
    }
}

export default IndexController;