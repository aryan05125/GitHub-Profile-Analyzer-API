const db = require("../config/db");
const getGithubProfile = require("../services/githubService");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required"
      });
    }

    const profile = await getGithubProfile(username);

    const sql = `
      INSERT INTO profiles
      (
        username,
        name,
        public_repos,
        followers,
        following,
        github_url,
        account_created
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        profile.login,
        profile.name,
        profile.public_repos,
        profile.followers,
        profile.following,
        profile.html_url,
        profile.created_at.split("T")[0]
      ],
      (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }

        res.status(201).json({
          success: true,
          message: "Profile analyzed successfully",
          data: profile
        });
      }
    );

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getAllProfiles = (req, res) => {
  const sql = "SELECT * FROM profiles";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    });
  });
};

const getSingleProfile = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM profiles WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Profile not found"
      });
    }

    res.status(200).json({
      success: true,
      data: results[0]
    });
  });
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile
};