import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Linkedin, CalendarCheck, Zap } from 'lucide-angular';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './contact.component.html',
})
export class ContactComponent {
    // Definición de Iconos
    iconMail = Mail;
    iconLinkedin = Linkedin;
    iconCalendar = CalendarCheck;
    iconZap = Zap;
}