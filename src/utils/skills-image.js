import csharp from '../assets/svg/skills/csharp.svg'
import dart from '../assets/svg/skills/dart.svg'
import docker from '../assets/svg/skills/docker.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import java from '../assets/svg/skills/java.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import android from '../assets/svg/skills/android.svg'
import ios from '../assets/svg/skills/ios.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'docker':
            return docker;
        case 'postgresql':
            return postgresql;
        case 'c':
            return c;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'firebase':
            return firebase;
        case 'canva':
            return canva;
        case 'android':
            return android;
        case 'flutter':
            return flutter;
        case 'git':
            return git;
        case 'ios':
            return ios;
        default:
            break;
    }
}
