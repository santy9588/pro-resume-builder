import Map "mo:core/Map";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";

actor {
  type PersonalInfo = {
    firstName : Text;
    lastName : Text;
    email : Text;
    phone : Text;
    address : Text;
    linkedIn : Text;
    github : Text;
    website : Text;
  };

  type WorkExperience = {
    jobTitle : Text;
    company : Text;
    location : Text;
    startDate : Text;
    endDate : Text;
    description : Text;
  };

  type Education = {
    institution : Text;
    degree : Text;
    fieldOfStudy : Text;
    startDate : Text;
    endDate : Text;
    gpa : Text;
    honors : Text;
  };

  type Skill = {
    name : Text;
    proficiency : Text;
    certified : Bool;
  };

  type Certification = {
    name : Text;
    organization : Text;
    date : Text;
    credentialId : Text;
    credentialUrl : Text;
  };

  type Language = {
    name : Text;
    proficiency : Text;
  };

  type Project = {
    name : Text;
    description : Text;
    technologies : [Text];
    github : Text;
    website : Text;
  };

  type Resume = {
    personalInfo : PersonalInfo;
    workExperience : [WorkExperience];
    education : [Education];
    skills : [Skill];
    summary : Text;
    certifications : [Certification];
    languages : [Language];
    projects : [Project];
  };

  module Resume {
    public func compare(resume1 : Resume, resume2 : Resume) : Order.Order {
      Text.compare(resume1.personalInfo.email, resume2.personalInfo.email);
    };
  };

  let resumes = Map.empty<Principal, Resume>();

  public shared ({ caller }) func saveResume(resume : Resume) : async () {
    resumes.add(caller, resume);
  };

  public query ({ caller }) func getMyResume() : async Resume {
    switch (resumes.get(caller)) {
      case (null) { Runtime.trap("No resume found for caller") };
      case (?resume) { resume };
    };
  };

  public query func getAllResumes() : async [Resume] {
    resumes.values().toArray().sort();
  };

  public query ({ caller }) func hasResume() : async Bool {
    resumes.containsKey(caller);
  };
};
