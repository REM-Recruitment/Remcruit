from rest_framework import serializers
from authentication.models import User, Employer, JobSeeker
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=[ 'email', 'is_jobSeeker']

class JobSeekerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    year_of_graduation = serializers.ChoiceField(choices=JobSeeker.YEAR_OF_GRADUATION_CHOICES, required=True)
    university_name = serializers.ChoiceField(choices=JobSeeker.UNIVERSITY_CHOICES, required=True)
    subject_of_study = serializers.ChoiceField(choices=JobSeeker.SUBJECT_OF_STUDY_CHOICES, required=True)
    degree_classification = serializers.ChoiceField(choices=JobSeeker.DEGREE_CLASSIFICATION_CHOICES,required=True)
    highest_qualification = serializers.ChoiceField(choices=JobSeeker.HIGHEST_QUALIFICATION_CHOICES, required=True)
    gender = serializers.ChoiceField(choices=JobSeeker.GENDER_CHOICES, required=True)
    terms_and_conditions = serializers.BooleanField(required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2',
            'subject_of_study',
            'university_name',
            'year_of_graduation',
            'degree_classification',
            'highest_qualification',
            'gender',
            'terms_and_conditions',
        ]
        read_only_fields = ["id"]
        extra_Kwargs={
            'password':{'write_only':True},
            'password2':{'write_only':True}
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"error":"password do not match"})

        validate_password(attrs["password"])
        attrs.pop("password2")
        return attrs
        

    def create(self, validated_data):
        email = validated_data.pop('email')
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        password = validated_data.pop('password')

        user = User(email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save()


        jobseeker = JobSeeker.objects.create(**validated_data, user=user)
        return jobseeker
        



class EmployerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    year_of_graduation = serializers.ChoiceField(choices=JobSeeker.YEAR_OF_GRADUATION_CHOICES, required=True)
    university_name = serializers.ChoiceField(choices=JobSeeker.UNIVERSITY_CHOICES, required=True)
    subject_of_study = serializers.ChoiceField(choices=JobSeeker.SUBJECT_OF_STUDY_CHOICES, required=True)
    degree_classification = serializers.ChoiceField(choices=JobSeeker.DEGREE_CLASSIFICATION_CHOICES,required=True)
    highest_qualification = serializers.ChoiceField(choices=JobSeeker.HIGHEST_QUALIFICATION_CHOICES, required=True)
    gender = serializers.ChoiceField(choices=JobSeeker.GENDER_CHOICES, required=True)
    terms_and_conditions = serializers.BooleanField(required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2',
            'title',
            'gender',
            'job_title',
            'phone_number',
            'organisation_name',
            'office_address',
            'organisation_description',
            'website',
            'employees',
            'recruitment_agency',
            'industry',
            'company_logo',
            'terms_and_conditions',
        ]
        read_only_fields = ["id"]
        extra_Kwargs={
            'password':{'write_only':True},
            'password2':{'write_only':True}
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"error":"password do not match"})

        validate_password(attrs["password"])
        attrs.pop("password2")
        return attrs
        

    def create(self, validated_data):
        email = validated_data.pop('email')
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        password = validated_data.pop('password')

        user = User(email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save()


        employer = Employer.objects.create(**validated_data, user=user)
        return employer
        