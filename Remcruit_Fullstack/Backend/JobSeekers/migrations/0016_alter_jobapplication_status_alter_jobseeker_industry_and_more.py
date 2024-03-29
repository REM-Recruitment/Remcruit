# Generated by Django 4.1.7 on 2023-05-18 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JobSeekers', '0015_jobseeker_industry_jobseeker_professional_summary_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobapplication',
            name='status',
            field=models.TextField(blank=True, choices=[('Accepted', 'Accepted'), ('Offer Sent', 'Offer Sent'), ('Interview', 'Interview'), ('Declined', 'Declined'), ('Offer Declined', 'Offer Declined'), ('In Review', 'In Review')], default='In Review'),
        ),
        migrations.AlterField(
            model_name='jobseeker',
            name='industry',
            field=models.TextField(choices=[('Accounting And Finance', 'Accounting And Finance'), ('Business Consulting And Management', 'Business Consulting And Management'), ('Charity And Voluntary Work', 'Charity And Voluntary Work'), ('Consumer Goods and etail', 'Consumer Goods And Retail'), ('Engineering and Construction', 'Engineering And Construction'), ('Entertainment', 'Entertainment'), ('Environment and Agriculture', 'Environment And Agriculture'), ('Energy and Utilities', 'Energy And Utilities')], default='Old'),
        ),
        migrations.AlterField(
            model_name='jobseeker',
            name='professional_summary',
            field=models.TextField(default='Old', max_length=400),
        ),
        migrations.AlterField(
            model_name='jobseeker',
            name='university_name',
            field=models.TextField(blank=True, choices=[('American University of Nigeria', 'American University Of Nigeria'), ('Ambrose Alli University', 'Ambrose Alli University'), ('Baze University', 'Baze University'), ('Bells University of Technology', 'Bells University Of Technology'), ('Benson Idahosa University', 'Benson Idahosa University'), ('Caleb University', 'Caleb University'), ('Covenant University', 'Covenant University'), ('Babcock University', 'Babcock University'), ('University of Lagos', 'University Of Lagos'), ('University of Benin', 'University Of Benin'), ('Afe Babalola University Ado-Ekiti', 'Afe Babalola University Ado Ekiti'), ('Yaba College Of Technology', 'Yaba College Of Technology'), ('Bowen University', 'Bowen University'), ('Nile University of Nigeria', 'Nile University Of Nigeria'), ('Obafemi Awolowo University', 'Obafemi Awolowo University'), ("Redeemer's University Nigeria", 'Redeemers Univerity Nigeria'), ('University of Calabar', 'University Of Calabar'), ('University of Delta', 'University Of Delta'), ('University of Port Harcourt', 'University Of Port Harcourt'), ('Adeleke University', 'Adeleke University')], null=True),
        ),
    ]
