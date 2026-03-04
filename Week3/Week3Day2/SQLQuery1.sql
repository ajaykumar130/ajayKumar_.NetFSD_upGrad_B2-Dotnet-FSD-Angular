CREATE DATABASE EventDb;

USE EventDb;

CREATE TABLE UserInfo (
    EmailId		VARCHAR(100) PRIMARY KEY,
    UserName	VARCHAR(50)  NOT NULL,
    Role		VARCHAR(20)  NOT NULL CHECK (Role IN ('Admin','Participant')),
    Password	VARCHAR(20)  NOT NULL 
);

CREATE TABLE EventDetails (
    EventId			INT				PRIMARY KEY,
    EventName		VARCHAR(50)		NOT NULL,
    EventCategory	VARCHAR(50)		NOT NULL,
    EventDate		DATETIME		NOT NULL,
    Description		VARCHAR(255)	NULL,
    Status			VARCHAR(20)		CHECK (Status IN ('Active','In-Active'))
);

CREATE TABLE SpeakersDetails (
    SpeakerId	INT			PRIMARY KEY,
    SpeakerName VARCHAR(50)	NOT NULL
);

CREATE TABLE SessionInfo (
    SessionId		INT				PRIMARY KEY,
    EventId			INT				NOT NULL,
    SessionTitle	VARCHAR(50)		NOT NULL,
    SpeakerId		INT				NOT NULL,
    Description		VARCHAR(200)	NULL,
    SessionStart	DATETIME		NOT NULL,
    SessionEnd		DATETIME		NOT NULL,
    SessionUrl		VARCHAR(200),

    FOREIGN KEY (EventId) REFERENCES EventDetails(EventId),
    FOREIGN KEY (SpeakerId) REFERENCES SpeakersDetails(SpeakerId)
);

CREATE TABLE ParticipantEventDetails (
    Id					INT				PRIMARY KEY,
    ParticipantEmailId	VARCHAR(100)	NOT NULL,
    EventId				INT				NOT NULL,
    SessionId			INT				NOT NULL,
    IsAttended			BIT				CHECK (IsAttended IN (0,1)),

    FOREIGN KEY (ParticipantEmailId) REFERENCES UserInfo(EmailId),
    FOREIGN KEY (EventId) REFERENCES EventDetails(EventId),
    FOREIGN KEY (SessionId) REFERENCES SessionInfo(SessionId)
);